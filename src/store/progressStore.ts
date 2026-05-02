import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { walkthroughPath } from '@/data/curriculum/walkthrough';
import { getStepContent } from '@/data/stepContent';
import { saveProgressToCloud, loadProgressFromCloud, saveProgressLocally, loadProgressLocally } from '@/lib/storage';
import { useAuthStore } from './authStore';

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: number;
  type: 'streak' | 'xp' | 'lessons' | 'perfect' | 'steps' | 'quizzes';
  unlockedAt?: string;
}

interface DailyStats {
  date: string;
  xpEarned: number;
  exercisesCompleted: number;
  timeSpentMinutes: number;
}

interface StepProgress {
  lessonsCompleted: string[];
  quizzesCompleted: string[];
  currentLesson: string | null;
  overallProgress: number;
}

interface ProgressState {
  streak: number;
  lastAccessDate: string | null;
  totalXP: number;
  gems: number;
  currentWalkthroughStep: number;
  walkthroughProgress: Record<number, number>;
  skillMastery: Record<string, number>;
  stepProgress: Record<number, StepProgress>;
  achievements: Achievement[];
  dailyStats: DailyStats[];
  completedChallenges: string[];
  hasSeenOnboarding: boolean;
  
  initializeProgress: () => void;
  syncToCloud: () => Promise<void>;
  updateStreak: () => void;
  addXP: (amount: number) => void;
  addGems: (amount: number) => void;
  spendGems: (amount: number) => boolean;
  completeChallenge: (challengeId: string, xp: number, gems: number) => void;
  
  setCurrentWalkthroughStep: (stepId: number) => void;
  updateWalkthroughProgress: (stepId: number, progress: number) => void;
  getWalkthroughProgress: (stepId: number) => number;
  getSkillMastery: (skillId: string, stepId: number) => number;
  updateSkillMastery: (skillId: string, stepId: number, mastery: number) => void;
  
  completeLesson: (stepId: number, lessonId: string, score: number) => void;
  completeQuiz: (stepId: number, quizId: string, score: number) => void;
  getStepProgress: (stepId: number) => StepProgress;
  isLessonCompleted: (stepId: number, lessonId: string) => boolean;
  isQuizCompleted: (stepId: number, quizId: string) => boolean;
  getStepCompletionPercentage: (stepId: number) => number;
  isStepUnlocked: (stepId: number) => boolean;
  getNextUnlockedStep: () => number;
  
  checkAndUnlockAchievements: () => Achievement[];
  getLevel: () => number;
  getLevelProgress: () => { current: number; required: number; percentage: number };
  getTotalSkillsMastered: () => number;
  getTotalStepsCompleted: () => number;
  getTodayStats: () => DailyStats;
  getWeeklyStats: () => DailyStats[];
  completeOnboarding: () => void;
  resetProgress: () => void;
}

const ACHIEVEMENTS: Omit<Achievement, 'unlockedAt'>[] = [
  { id: 'first_step', name: 'First Steps', description: 'Complete your first step', icon: '👣', requirement: 1, type: 'steps' },
  { id: 'streak_3', name: 'On Fire', description: '3 day streak', icon: '🔥', requirement: 3, type: 'streak' },
  { id: 'streak_7', name: 'Week Warrior', description: '7 day streak', icon: '💪', requirement: 7, type: 'streak' },
  { id: 'streak_30', name: 'Monthly Master', description: '30 day streak', icon: '🏆', requirement: 30, type: 'streak' },
  { id: 'xp_100', name: 'Getting Started', description: 'Earn 100 XP', icon: '⭐', requirement: 100, type: 'xp' },
  { id: 'xp_500', name: 'XP Hunter', description: 'Earn 500 XP', icon: '🌟', requirement: 500, type: 'xp' },
  { id: 'xp_1000', name: 'XP Champion', description: 'Earn 1000 XP', icon: '💫', requirement: 1000, type: 'xp' },
  { id: 'xp_5000', name: 'XP Legend', description: 'Earn 5000 XP', icon: '👑', requirement: 5000, type: 'xp' },
  { id: 'lessons_5', name: 'Quick Learner', description: 'Complete 5 lessons', icon: '📚', requirement: 5, type: 'lessons' },
  { id: 'lessons_10', name: 'Dedicated Student', description: 'Complete 10 lessons', icon: '🎓', requirement: 10, type: 'lessons' },
  { id: 'lessons_20', name: 'Grammar Expert', description: 'Complete 20 lessons', icon: '🧠', requirement: 20, type: 'lessons' },
  { id: 'quizzes_3', name: 'Quiz Master', description: 'Complete 3 quizzes', icon: '🎯', requirement: 3, type: 'quizzes' },
  { id: 'quizzes_6', name: 'Quiz Champion', description: 'Complete 6 quizzes', icon: '🏅', requirement: 6, type: 'quizzes' },
  { id: 'perfect_1', name: 'Perfectionist', description: 'Get 100% on a quiz', icon: '✨', requirement: 1, type: 'perfect' },
  { id: 'all_steps', name: 'Path Walker', description: 'Complete all 6 steps', icon: '🛤️', requirement: 6, type: 'steps' },
];

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      streak: 0,
      lastAccessDate: null,
      totalXP: 0,
      gems: 0,
      currentWalkthroughStep: 1,
      walkthroughProgress: {},
      skillMastery: {},
      stepProgress: {},
      achievements: [],
      dailyStats: [],
      completedChallenges: [],
      hasSeenOnboarding: false,

      initializeProgress: async () => {
        const state = get();
        const authState = useAuthStore.getState();
        const userId = authState.getUserId();
        
        if (authState.cloudSynced && (authState.isAuthenticated || authState.isGuest)) {
          try {
            const cloudData = await loadProgressFromCloud(userId);
            if (cloudData) {
              set({
                streak: cloudData.streak || 0,
                lastAccessDate: cloudData.lastAccessDate,
                totalXP: cloudData.totalXP || 0,
                gems: cloudData.gems || 0,
                currentWalkthroughStep: cloudData.currentWalkthroughStep || 1,
                walkthroughProgress: cloudData.walkthroughProgress || {},
                skillMastery: cloudData.skillMastery || {},
                stepProgress: cloudData.stepProgress as Record<number, StepProgress> || {},
                achievements: cloudData.achievements as Achievement[] || [],
                dailyStats: cloudData.dailyStats as DailyStats[] || [],
                completedChallenges: cloudData.completedChallenges || [],
                hasSeenOnboarding: cloudData.hasSeenOnboarding || false,
              });
              return;
            }
          } catch (error) {
            console.error('Failed to load from cloud:', error);
          }
        }
        
        if (state.lastAccessDate === null) {
          set({ 
            lastAccessDate: new Date().toISOString().split('T')[0],
            achievements: [],
            dailyStats: [],
          });
        }
      },

      syncToCloud: async () => {
        const authState = useAuthStore.getState();
        if (!authState.cloudSynced) return;
        
        const userId = authState.getUserId();
        const state = get();
        
        const data = {
          streak: state.streak,
          lastAccessDate: state.lastAccessDate,
          totalXP: state.totalXP,
          gems: state.gems,
          currentWalkthroughStep: state.currentWalkthroughStep,
          walkthroughProgress: state.walkthroughProgress,
          skillMastery: state.skillMastery,
          stepProgress: state.stepProgress,
          achievements: state.achievements,
          dailyStats: state.dailyStats,
          completedChallenges: state.completedChallenges,
          hasSeenOnboarding: state.hasSeenOnboarding,
        };
        
        saveProgressLocally(data);
        await saveProgressToCloud(userId, data);
      },

      updateStreak: () => {
        const state = get();
        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];
        
        if (state.lastAccessDate === today) return;
        
        let newStreak: number;
        if (state.lastAccessDate === yesterdayStr) {
          newStreak = state.streak + 1;
        } else {
          newStreak = 1;
        }
        
        set({ streak: newStreak, lastAccessDate: today });
        get().checkAndUnlockAchievements();
      },

      addXP: (amount: number) => {
        set((state) => {
          const today = state.getTodayStats();
          const newDailyStats = state.dailyStats.filter(s => s.date !== today.date).concat([{
            ...today,
            xpEarned: today.xpEarned + amount,
            exercisesCompleted: today.exercisesCompleted + 1,
          }]);
          
          return { 
            totalXP: state.totalXP + amount,
            dailyStats: newDailyStats,
          };
        });
        get().checkAndUnlockAchievements();
        get().syncToCloud();
      },

      addGems: (amount: number) => {
        set((state) => ({ gems: state.gems + amount }));
        get().syncToCloud();
      },

      spendGems: (amount: number) => {
        const state = get();
        if (state.gems < amount) return false;
        set({ gems: state.gems - amount });
        return true;
      },

      completeChallenge: (challengeId: string, xp: number, gems: number) => {
        const state = get();
        if (state.completedChallenges.includes(challengeId)) return;
        
        const today = state.getTodayStats();
        const newDailyStats = state.dailyStats.filter(s => s.date !== today.date).concat([{
          ...today,
          xpEarned: today.xpEarned + xp,
          exercisesCompleted: today.exercisesCompleted + 1,
        }]);
        
        set((state) => ({
          completedChallenges: [...state.completedChallenges, challengeId],
          totalXP: state.totalXP + xp,
          gems: state.gems + gems,
          dailyStats: newDailyStats,
        }));
        
        get().checkAndUnlockAchievements();
      },

      setCurrentWalkthroughStep: (stepId: number) => {
        set({ currentWalkthroughStep: stepId });
      },

      updateWalkthroughProgress: (stepId: number, progress: number) => {
        set((state) => ({
          walkthroughProgress: {
            ...state.walkthroughProgress,
            [stepId]: Math.max(state.walkthroughProgress[stepId] || 0, progress)
          }
        }));
      },

      getWalkthroughProgress: (stepId: number): number => {
        return get().getStepCompletionPercentage(stepId);
      },

      getSkillMastery: (skillId: string, stepId: number): number => {
        const state = get();
        const key = `${skillId}-${stepId}`;
        return state.skillMastery[key] || 0;
      },

      updateSkillMastery: (skillId: string, stepId: number, mastery: number) => {
        const state = get();
        const key = `${skillId}-${stepId}`;
        set((state) => ({
          skillMastery: {
            ...state.skillMastery,
            [key]: Math.min(100, Math.max(state.skillMastery[key] || 0, mastery))
          }
        }));
        get().checkAndUnlockAchievements();
      },

      completeLesson: (stepId: number, lessonId: string, score: number) => {
        const state = get();
        const currentStepProgress = state.stepProgress[stepId] || {
          lessonsCompleted: [],
          quizzesCompleted: [],
          currentLesson: null,
          overallProgress: 0,
        };

        if (currentStepProgress.lessonsCompleted.includes(lessonId)) return;

        const newLessonsCompleted = [...currentStepProgress.lessonsCompleted, lessonId];
        const percentage = get().getStepCompletionPercentage(stepId);

        set((state) => ({
          stepProgress: {
            ...state.stepProgress,
            [stepId]: {
              ...currentStepProgress,
              lessonsCompleted: newLessonsCompleted,
              overallProgress: percentage,
            },
          },
        }));

        get().checkAndUnlockAchievements();
      },

      completeQuiz: (stepId: number, quizId: string, score: number) => {
        const state = get();
        const currentStepProgress = state.stepProgress[stepId] || {
          lessonsCompleted: [],
          quizzesCompleted: [],
          currentLesson: null,
          overallProgress: 0,
        };

        if (currentStepProgress.quizzesCompleted.includes(quizId)) {
          return;
        }

        const newQuizzesCompleted = [...currentStepProgress.quizzesCompleted, quizId];
        const percentage = get().getStepCompletionPercentage(stepId);

        set((state) => ({
          stepProgress: {
            ...state.stepProgress,
            [stepId]: {
              ...currentStepProgress,
              quizzesCompleted: newQuizzesCompleted,
              overallProgress: percentage,
            },
          },
          walkthroughProgress: {
            ...state.walkthroughProgress,
            [stepId]: Math.max(state.walkthroughProgress[stepId] || 0, percentage),
          },
        }));

        get().checkAndUnlockAchievements();
      },

      getStepProgress: (stepId: number): StepProgress => {
        const state = get();
        return state.stepProgress[stepId] || {
          lessonsCompleted: [],
          quizzesCompleted: [],
          currentLesson: null,
          overallProgress: 0,
        };
      },

      isLessonCompleted: (stepId: number, lessonId: string): boolean => {
        const state = get();
        return state.stepProgress[stepId]?.lessonsCompleted.includes(lessonId) || false;
      },

      isQuizCompleted: (stepId: number, quizId: string): boolean => {
        const state = get();
        return state.stepProgress[stepId]?.quizzesCompleted.includes(quizId) || false;
      },

      getStepCompletionPercentage: (stepId: number): number => {
        const state = get();
        const stepContent = getStepContent(stepId);
        if (!stepContent) return 0;

        const progress = state.stepProgress[stepId];
        if (!progress) return 0;

        const totalItems = stepContent.lessons.length + stepContent.quizzes.length;
        if (totalItems === 0) return 0;

        const completedItems = progress.lessonsCompleted.length + progress.quizzesCompleted.length;
        return Math.round((completedItems / totalItems) * 100);
      },

      isStepUnlocked: (stepId: number): boolean => {
        if (stepId === 1) return true;
        const state = get();
        const previousProgress = state.getStepCompletionPercentage(stepId - 1);
        return previousProgress >= 80;
      },

      getNextUnlockedStep: (): number => {
        const state = get();
        for (let i = 1; i <= 6; i++) {
          if (state.isStepUnlocked(i)) {
            const progress = state.getStepCompletionPercentage(i);
            if (progress < 100) return i;
          }
        }
        return 6;
      },

      checkAndUnlockAchievements: () => {
        const state = get();
        const newlyUnlocked: Achievement[] = [];
        
        const totalLessonsCompleted = Object.values(state.stepProgress)
          .reduce((acc, p) => acc + p.lessonsCompleted.length, 0);
        
        const totalQuizzesCompleted = Object.values(state.stepProgress)
          .reduce((acc, p) => acc + p.quizzesCompleted.length, 0);
        
        const totalStepsCompleted = state.getTotalStepsCompleted();
        let hasPerfectQuiz = false;
        for (const progress of Object.values(state.stepProgress)) {
          if (progress.quizzesCompleted.length > 0) {
            hasPerfectQuiz = true;
          }
        }
        
        for (const achievement of ACHIEVEMENTS) {
          const alreadyUnlocked = state.achievements.some(a => a.id === achievement.id);
          if (alreadyUnlocked) continue;
          
          let shouldUnlock = false;
          
          switch (achievement.type) {
            case 'streak':
              shouldUnlock = state.streak >= achievement.requirement;
              break;
            case 'xp':
              shouldUnlock = state.totalXP >= achievement.requirement;
              break;
            case 'lessons':
              shouldUnlock = totalLessonsCompleted >= achievement.requirement;
              break;
            case 'quizzes':
              shouldUnlock = totalQuizzesCompleted >= achievement.requirement;
              break;
            case 'steps':
              shouldUnlock = totalStepsCompleted >= achievement.requirement;
              break;
            case 'perfect':
              shouldUnlock = hasPerfectQuiz;
              break;
          }
          
          if (shouldUnlock) {
            newlyUnlocked.push({
              ...achievement,
              unlockedAt: new Date().toISOString(),
            });
          }
        }
        
        if (newlyUnlocked.length > 0) {
          set({ achievements: [...state.achievements, ...newlyUnlocked] });
        }
        
        return newlyUnlocked;
      },

      getLevel: () => {
        return Math.floor(get().totalXP / 100) + 1;
      },

      getLevelProgress: () => {
        const state = get();
        const currentLevelXP = state.totalXP % 100;
        return {
          current: currentLevelXP,
          required: 100,
          percentage: currentLevelXP,
        };
      },

      getTotalSkillsMastered: () => {
        const state = get();
        let count = 0;
        for (const stepProgress of Object.values(state.stepProgress)) {
          count += stepProgress.lessonsCompleted.length;
          count += stepProgress.quizzesCompleted.length;
        }
        return count;
      },

      getTotalStepsCompleted: () => {
        const state = get();
        let count = 0;
        for (let i = 1; i <= 6; i++) {
          if (state.getStepCompletionPercentage(i) >= 80) {
            count++;
          }
        }
        return count;
      },

      getTodayStats: () => {
        const today = new Date().toISOString().split('T')[0];
        const state = get();
        return state.dailyStats.find(s => s.date === today) || {
          date: today,
          xpEarned: 0,
          exercisesCompleted: 0,
          timeSpentMinutes: 0,
        };
      },

      getWeeklyStats: () => {
        const state = get();
        const today = new Date();
        const weekAgo = new Date(today);
        weekAgo.setDate(weekAgo.getDate() - 7);
        
        return state.dailyStats.filter(s => {
          const date = new Date(s.date);
          return date >= weekAgo && date <= today;
        });
      },

      completeOnboarding: () => {
        set({ hasSeenOnboarding: true });
      },

      resetProgress: () => {
        set({
          streak: 0,
          lastAccessDate: null,
          totalXP: 0,
          gems: 0,
          currentWalkthroughStep: 1,
          walkthroughProgress: {},
          skillMastery: {},
          stepProgress: {},
          achievements: [],
          dailyStats: [],
          completedChallenges: [],
          hasSeenOnboarding: false,
        });
      },
    }),
    { name: 'grampath-progress' }
  )
);