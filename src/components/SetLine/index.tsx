'use client'

import { alternateSetStateDone, inputChange } from "@/app/utils/functions"
import CustomInput from "../CustomInput"
import './SetLine.scss';
import IconBtn from "../IconBtn";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

export interface SetLinePropsType {
    set: number,
    reps: number,
    weight?: number,
    done: boolean,
    setDone: (done: boolean) => void,

}

const SetLine = ({weight = 0, done = false, ...props}: SetLinePropsType) => {
  const [setFinished, setsetFinished] = useState(false)

  return (
    <div className={`SetLine ${setFinished ? 'setDone' : ''}`}>
        <span>{props.set}</span>
        <CustomInput name="reps" type="text" value={props.reps + ""} onChange={() => inputChange}/>
        <CustomInput name="weight" type="text" value={weight + ""} onChange={() => inputChange}/>
        <IconBtn 
            type="button"
            Icon={FaCheck} 
            clickEvent={() => setsetFinished(!setFinished)}
            onlyIcon={true}
        />
    </div>
  )
}

export default SetLine