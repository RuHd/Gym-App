import useProfileState from "@/features/authentication/services/authenticationStore";
import { userProfile } from "@/features/authentication/types";
import { Exercise, GroupExercises } from "@/features/workout/types";

export function inputChange (event: React.ChangeEvent<HTMLInputElement>, setValue: (value: string) => void) {
    setValue(event.target.value);
}

export function alternateSetStateDone(value: boolean) {
    return !value;
}

export function addExtraTime (currentTime: number, extraTime: number) {
    return currentTime + extraTime;
}

// Add a new Set

export const addSet = (exercise: Exercise) => exercise.sets++

// only numbers in a input value

export const setOnlyNums = (valor: string, setFunc: React.Dispatch<React.SetStateAction<string>>) => !isNaN(Number(valor)) ? setFunc(valor.toString().trim()) : setFunc("")



export const createFormProfile = (user : userProfile) => {
    const setProfile = useProfileState.getState().setProfile

    for (let i in user) {
        if (i.length < 1) return
    }
    
    setProfile(user)

    console.log(user)


}

