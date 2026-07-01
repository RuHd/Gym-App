'use client'

import CustomBtn from "@/components/CustomBtn"
import HeadTitle from "@/components/HeadTitle"
import LayoutCard from "@/components/LayoutCard"
import { FaClockRotateLeft } from "react-icons/fa6"
import { IoIosArrowForward } from "react-icons/io"
import './page.scss'
import { MdOutlineElectricBolt } from "react-icons/md"
import useWorkoutStore from "@/features/workout/services/store/workoutStore"
import SetContainer from "@/components/SetContainer/SetContainer"
import TimerContainer from "@/components/TimerContainer"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

const Treino = () => {
  
  let workoutLocalStorage = localStorage.getItem("workout-storage")
  let exercise = workoutLocalStorage ? JSON.parse(workoutLocalStorage).state.workout.exercises[0] : null

  const router = useRouter()

  

  useEffect(() => {

    if (workoutLocalStorage == undefined) {
        router.push('/emptyTraining')
        console.log(workoutLocalStorage)
    } else {
      
    }
  
    return () => {
      
    }
  }, [])

  
  console.log(exercise)
  return (
    <div style={exercise == undefined ? {opacity: 0} : null}>
      <header>
        <HeadTitle as="h1" text="Workout" style={{color: "#00ff41"}}/>
        <CustomBtn 
            clickEvent={() => alert("clicked")} 
            type="button"
            style={{color: "#00ff41", fontSize: "1.2rem"}}
        >
          Encerrar
        </CustomBtn>

      </header>
      <section className="exercise-name-container">
        <HeadTitle 
            as="h2" 
            text={exercise.name} 
            style = {{
              fontSize: "2.5rem"
            }}
        
        />
        <div style={{display: "flex", alignItems: "center"}}>
          <MdOutlineElectricBolt />
          <HeadTitle as="h3" text="Hipertrofia" />
        </div>
      </section>
      <LayoutCard className="session-history" 
        style={{
          width: "auto"
        }}
      >
        <FaClockRotateLeft/>
        <div>
          <p>Last Session History</p>
          <p style={{color: "#5afc82", fontWeight: "bold"}}>Last: 3 x 12 (80 kg)</p>
        </div>
        <CustomBtn
          clickEvent={() => console.log("Clicked")} 
          type="button"
        >
          <IoIosArrowForward/>
        </CustomBtn>
            
      </LayoutCard>
      <LayoutCard className="resting-timer">
        <h4>Resting Timer</h4>
        <TimerContainer/>
      </LayoutCard>
      <section>
        <div>
          <span>SET</span>
          <span>KGS</span>
          <span>REPS</span>
        </div>
        <SetContainer exercise={exercise}/>
        <CustomBtn 
            clickEvent={() => console.log("clicked")}
            type="button"
            style={{
              width: "100%", 
              backgroundColor: "#201F1F",
              padding: '1rem',
              textTransform: "uppercase",
              borderRadius: "0.5rem",
              border: "2px solid #383737",
              marginTop: "1.5rem",
            }}
        >
          + Add Set
        </CustomBtn>
      </section>
    </div>
  )
}

export default Treino