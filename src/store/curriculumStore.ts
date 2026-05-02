import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Lesson, Unit } from '@/types';

interface CurriculumState {
  units: Unit[];
  currentUnit: Unit | null;
  currentLesson: Lesson | null;
  currentExerciseIndex: number;
  
  setUnits: (units: Unit[]) => void;
  setCurrentUnit: (unit: Unit | null) => void;
  setCurrentLesson: (lesson: Lesson | null) => void;
  nextExercise: () => void;
  resetExerciseIndex: () => void;
}

export const useCurriculumStore = create<CurriculumState>()(
  persist(
    (set, get) => ({
      units: [],
      currentUnit: null,
      currentLesson: null,
      currentExerciseIndex: 0,

      setUnits: (units: Unit[]) => set({ units }),
      
      setCurrentUnit: (unit: Unit | null) => set({ currentUnit: unit }),
      
      setCurrentLesson: (lesson: Lesson | null) => set({ 
        currentLesson: lesson,
        currentExerciseIndex: 0 
      }),
      
      nextExercise: () => set((state) => ({ 
        currentExerciseIndex: state.currentExerciseIndex + 1 
      })),
      
      resetExerciseIndex: () => set({ currentExerciseIndex: 0 })
    }),
    {
      name: 'grampath-curriculum',
      partialize: (state) => ({
        currentExerciseIndex: state.currentExerciseIndex
      })
    }
  )
);