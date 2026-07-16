'use client'

import "../CustomInput/CustomInput.scss";
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
  const [reps, setReps] = useState(props.reps + "")
  const [weightValue, setWeightValue] = useState(weight + "")

  return (
    <div className={`SetLine ${setFinished ? 'setDone' : ''}`}>
        <span>{props.set}</span>
        <input
            name="reps"
            type="number"
            className="CustomInput"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
        />
        <input
            name="weight"
            type="number"
            className="CustomInput"
            value={weightValue}
            onChange={(e) => setWeightValue(e.target.value)}
        />
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