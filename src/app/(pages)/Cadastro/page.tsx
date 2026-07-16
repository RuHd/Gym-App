'use client'

import HeadTitle from "@/components/HeadTitle"

import './Cadastro.scss'
import CustomBtn from "@/components/CustomBtn"
import { useState } from "react"
import { createFormProfile } from "@/app/utils/functions"

// Formulário de cadastro de perfil (nome, email, altura, peso).
// Não é autenticação real: só grava os dados na authenticationStore local.
const Cadastro = () => {
  const [email, setEmail] = useState("")
  const [name, setname] = useState("")
  const [altura, setaltura] = useState("")
  const [peso, setpeso] = useState("")

  return (
    <div className="cadastro">
      <section>
        <HeadTitle as="h1" text="Junta-se a Volt" />
        <p>Crie seu perfil e comece sua jornada de desempenho.</p>
      </section>

      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          <span>Nome Completo</span>
          <input onChange={(e) => setname(e.target.value)} required type="text" placeholder="Digite seu nome completo" name="fullName" />
        </label>
        <label>
          <span>Email</span>
          <input required type="email" placeholder="Digite seu email" name="email" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <fieldset>
          <label>
            <span>Altura (cm)</span>
            <input onChange={(e) => setaltura(e.target.value)} required maxLength={3} type="number" placeholder="Digite sua altura" name="height" />
          </label>
          <label>
            <span>Peso (kg)</span>
            <input onChange={(e) => setpeso(e.target.value)} required maxLength={3} type="number" placeholder="Digite seu peso" name="weight" />
          </label>
        </fieldset>
        <CustomBtn type="submit" clickEvent={() => createFormProfile({name: name, email: email, peso: peso, altura: altura})}
          style={{
            backgroundColor: "#00FF41",
            color: "black",
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "7px"
          }}
        >
          Criar Conta
        </CustomBtn>
      </form>
    </div>
  )
}

export default Cadastro