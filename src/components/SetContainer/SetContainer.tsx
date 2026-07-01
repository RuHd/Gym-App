'use client'

import { useState } from "react"
import SetLine  from "../SetLine"
import { Exercise } from "@/features/workout/types"
import './SetContainer.scss'

interface SetContainerTypeProps {
    exercise: Exercise
}

export default function SetContainer(props: SetContainerTypeProps) {
    const [setDone, setsetDone] = useState(false)

  return (
    <div className="setContainer">
      {props.exercise.sets > 0 && Array.from({length: props.exercise.sets}).map((_,index) => {
        return (
          <SetLine
            key={index}
            set={index + 1}
            reps={props.exercise.reps}
            weight={props.exercise.weight}
            done={setDone}
            setDone={setsetDone}
          />
        )
      })}
    </div>
  )
}