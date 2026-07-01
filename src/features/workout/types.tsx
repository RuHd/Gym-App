export type Exercise =  {
    id: string,
    name: string,
    sets: number,
    weight: number,
    reps: number,
    restTime: number,
}

export type GroupExercises = {
    group: "A" | "B"|  "C" | "D" | null ,
    name: string,
    exercises: Exercise[]
}

export type allTraining = {
    groupExercises : GroupExercises[]
}

