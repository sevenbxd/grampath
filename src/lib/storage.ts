import { supabase } from './supabase';

const STORAGE_KEY = 'grampath-progress';

export interface ProgressData {
  streak: number;
  lastAccessDate: string | null;
  totalXP: number;
  gems: number;
  currentWalkthroughStep: number;
  walkthroughProgress: Record<number, number>;
  skillMastery: Record<string, number>;
  stepProgress: Record<number, unknown>;
  achievements: unknown[];
  dailyStats: unknown[];
  completedChallenges: string[];
  hasSeenOnboarding: boolean;
}

export async function saveProgressToCloud(userId: string, data: ProgressData): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('user_progress')
      .upsert({
        user_id: userId,
        streak: data.streak || 0,
        last_access_date: data.lastAccessDate || null,
        total_xp: data.totalXP || 0,
        gems: data.gems || 0,
        current_walkthrough_step: data.currentWalkthroughStep || 1,
        walkthrough_progress: JSON.stringify(data.walkthroughProgress || {}),
        skill_mastery: JSON.stringify(data.skillMastery || {}),
        step_progress: JSON.stringify(data.stepProgress || {}),
        achievements: JSON.stringify(data.achievements || []),
        daily_stats: JSON.stringify(data.dailyStats || []),
        completed_challenges: JSON.stringify(data.completedChallenges || []),
        has_seen_onboarding: data.hasSeenOnboarding || false,
        updated_at: new Date().toISOString(),
      }, {
        onConflict: 'user_id',
      });

    if (error) {
      console.error('Supabase save error:', error);
      return false;
    }
    return true;
  } catch (error) {
    console.error('Error saving to cloud:', error);
    return false;
  }
}

export async function loadProgressFromCloud(userId: string): Promise<ProgressData | null> {
  try {
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error || !data) {
      return null;
    }

    return {
      streak: data.streak || 0,
      lastAccessDate: data.last_access_date || null,
      totalXP: data.total_xp || 0,
      gems: data.gems || 0,
      currentWalkthroughStep: data.current_walkthrough_step || 1,
      walkthroughProgress: typeof data.walkthrough_progress === 'string' ? JSON.parse(data.walkthrough_progress) : (data.walkthrough_progress || {}),
      skillMastery: typeof data.skill_mastery === 'string' ? JSON.parse(data.skill_mastery) : (data.skill_mastery || {}),
      stepProgress: typeof data.step_progress === 'string' ? JSON.parse(data.step_progress) : (data.step_progress || {}),
      achievements: typeof data.achievements === 'string' ? JSON.parse(data.achievements) : (data.achievements || []),
      dailyStats: typeof data.daily_stats === 'string' ? JSON.parse(data.daily_stats) : (data.daily_stats || []),
      completedChallenges: typeof data.completed_challenges === 'string' ? JSON.parse(data.completed_challenges) : (data.completed_challenges || []),
      hasSeenOnboarding: data.has_seen_onboarding || false,
    };
  } catch (error) {
    console.error('Error loading from cloud:', error);
    return null;
  }
}

export function saveProgressLocally(data: ProgressData): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
}

export function loadProgressLocally(): ProgressData | null {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  }
  return null;
}

export function clearLocalProgress(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
}