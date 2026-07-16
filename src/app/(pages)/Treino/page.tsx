'use client'

import CustomBtn from "@/components/CustomBtn"
import HeadTitle from "@/components/HeadTitle"
import LayoutCard from "@/components/LayoutCard"
import { FaClockRotateLeft } from "react-icons/fa6"
import { IoIosArrowForward } from "react-icons/io"
import './page.scss'
import { MdOutlineElectricBolt } from "react-icons/md"
import SetContainer from "@/components/SetContainer/SetContainer"
import TimerContainer from "@/components/TimerContainer"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Exercise } from "@/features/workout/types"

// Tela de sessão de treino ativa: mostra o primeiro exercício salvo no workoutStore.
// Se não houver exercício válido (storage ausente, vazio ou corrompido), redireciona para /emptyTraining.
const Treino = () => {
  const router = useRouter()
  const [exercise, setExercise] = useState<Exercise | null>(null)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const workoutLocalStorage = localStorage.getItem("workout-storage")
    let firstExercise: Exercise | undefined

    try {
      firstExercise = workoutLocalStorage
        ? JSON.parse(workoutLocalStorage).state.workout.exercises[0]
        : undefined
    } catch {
      localStorage.removeItem("workout-storage")
      firstExercise = undefined
    }

    if (!firstExercise) {
      router.push('/emptyTraining')
      return
    }

    setExercise(firstExercise)
    setChecked(true)
  }, [router])

  if (!checked || !exercise) return null

    return (
    <div>
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