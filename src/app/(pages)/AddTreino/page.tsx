'use client'

import HeadTitle from "@/components/HeadTitle"
import LayoutCard from "@/components/LayoutCard"

import './page.scss';
import CustomBtn from "@/components/CustomBtn";
import useWorkoutStore from "@/features/workout/services/store/workoutStore";
import { useEffect, useState } from "react";
import { setOnlyNums } from "@/app/utils/functions";
import { Exercise } from "@/features/workout/types";

// Formulário de criação de exercício: nome, séries, repetições e grupo muscular (A-D).
// Ao salvar, adiciona o exercício na store de treino (workoutStore).
const AddTreino = () => {
    const addExercise = useWorkoutStore((state) => state.addExercise)


    const [set, setset] = useState("")
    const [reps, setreps] = useState("")
    const [name, setname] = useState("")
    const [group, setgroup] = useState("")

    
  return (
    <div className="AddTreino">
        <HeadTitle
            className="HeadTitle" 
            as="h1" 
            text="Criar Exercício" 
            style={{
                color: "#00ff41"
            }}
        />
        <form>
          <LayoutCard className="LayoutCard">
              <label>
                  <span>Nome do Exercício</span>
                  <input 
                    type="text" 
                    name="exerciseName" 
                    placeholder="Ex: Supino Reto"
                    value={name} 
                    style={{
                        width: "100%",
                        height: "40px",
                        textAlign: "start"
                    }}
                    onChange={(e) => setname(e.target.value)}
                  />
              </label>
          </LayoutCard>

          <LayoutCard className="LayoutCard" style={{
            borderLeft: "3px solid #00FF41"
          }}>
              <label>
                  <span>Número de Séries</span>
                  <input type="text" 
                         name="sets" 
                         placeholder="3"
                         value={set}
                         onChange = {(e) => setOnlyNums(e.target.value, setset)}
                         maxLength={3}
                   />
              </label>
          </LayoutCard>

          <LayoutCard className="LayoutCard">
              <label>
                  <span>Número de Repetições</span>
                  <input type="text" 
                         name="reps" 
                         placeholder="12"
                         value={reps}
                         onChange={(e) => setOnlyNums(e.target.value, setreps)}
                         maxLength={3}
                   />
              </label>
          </LayoutCard>
          <LayoutCard>
                <label>
                    <h3>Selecione o grupo</h3>
                    <ul>
                        <li>
                            <span>A</span>
                            <input value="A" type="radio" name="group" onChange={(e) => setgroup(e.target.value)} className="inputRadio"/>
                        </li>
                        <li>
                            <span>B</span>
                            <input value="B" type="radio" name="group" onChange={(e) => setgroup(e.target.value)} className="inputRadio"/>
                        </li>
                        <li>
                            <span>C</span>
                            <input value="C" type="radio" name="group" onChange={(e) => setgroup(e.target.value)} className="inputRadio"/>
                        </li>
                        <li>
                            <span>D</span>
                            <input value="D" type="radio" name="group" onChange={(e) => setgroup(e.target.value)} className="inputRadio"/>
                        </li>
                    </ul>
                </label>
          </LayoutCard>
          <label>
            <CustomBtn 
                clickEvent={() => addExercise(group, name,parseFloat(set),1,parseFloat(reps), 60)} 
                type="button"
                style={{
                    width: "100%",
                    backgroundColor: "#00e5ff",
                    color: "#000",
                    fontSize: "1.2rem",
                    padding: "1rem",
                    fontWeight: "bold",
                    borderRadius: "7px"
                }}
                
            >
                Criar Exercício
            </CustomBtn>
          </label>

        </form>
    </div>
  )
}

export default AddTreino