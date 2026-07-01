import { create } from "zustand";
import { persist } from "zustand/middleware";
import { GroupExercises } from "../../types";

interface WorkoutStore {
  workout: GroupExercises;

  setWorkout: (workout: GroupExercises) => void;

  updateExercise: (
    exerciseId: string,
    weight: number,
    reps: number,
    sets: number
  ) => void;

  removeExercise: (exerciseId: string) => void;

  addExercise: (
    id: string,
    name: string,
    sets: number,
    weight: number,
    reps: number,
    restTime: number
  ) => void;
}

const useWorkoutStore = create<WorkoutStore>()(
  persist(
    (set) => ({
      workout: {
        exercises: [],
        group: null,
        name: ""
      },

      setWorkout: (workout) =>
        set({
          workout,
        }),

      updateExercise: (exerciseId, weight, reps, sets) =>
        set((state) => ({
          workout: {
            ...state.workout,
            exercises: state.workout.exercises.map((exercise) =>
              exercise.id === exerciseId
                ? {
                    ...exercise,
                    weight,
                    reps,
                    sets,
                  }
                : exercise
            ),
          },
        })),

      removeExercise: (exerciseId) =>
        set((state) => ({
          workout: {
            ...state.workout,
            exercises: state.workout.exercises.filter(
              (exercise) => exercise.id !== exerciseId
            ),
          },
        })),

      addExercise: (id, name, sets, weight, reps, restTime) =>
        set((state) => ({
          workout: {
            ...state.workout,
            exercises: [
              ...state.workout.exercises,
              {
                id,
                name,
                sets,
                weight,
                reps,
                restTime,
              },
            ],
          },
        })),
    }),
    {
      name: "workout-storage",
    }
  )
);

export default useWorkoutStore;