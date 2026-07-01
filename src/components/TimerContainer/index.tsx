'use client'

import { useState } from 'react'
import CustomBtn from '../CustomBtn'
import Timer from '../Timer'
import useWorkoutStore from '@/features/workout/services/store/workoutStore'

const TimerContainer = () => {
    const exercise = useWorkoutStore((state) => state.workout.exercises[1])
    const [extraTime, setextraTime] = useState(0)
    const [isDone, setIsDone] = useState(true)
    
  return (
    <section>
        <Timer value={45} 
               extraTime={extraTime} 
               setExtraTime = {setextraTime} 
               isDone={isDone}
        />
        <section className="timer-btns">
          <CustomBtn 
            clickEvent={() => setextraTime((prev) => prev + 15)} 
            type="button"
          >
            +15s
          </CustomBtn>
          <CustomBtn 
            clickEvent={() => setIsDone(true)} 
            type="button"
          >
            Skip
          </CustomBtn>
           <CustomBtn 
            clickEvent={() => setIsDone(false)} 
            type="button"
          >
            Start
          </CustomBtn>
        </section>
    </section>
  )
}

export default TimerContainer