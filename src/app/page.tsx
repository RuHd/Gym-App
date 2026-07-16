'use client'

import LayoutCard from "@/components/LayoutCard";
import "./page.scss";
import IconBtn from "@/components/IconBtn";
import { IoPlaySharp } from "react-icons/io5";
import { FaTableList } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";




// Página inicial: atalhos para iniciar treino, listar exercícios e criar exercícios.
export default function Home() {
  return (
    <div className="home">
      <section className="home-welcome">
        <p>bem-vindo de volta</p>
        <h2>
          <i>
            Olá, atleta
          </i>
        </h2>
      </section>
      <section className="home-heropage">
        <LayoutCard 
          style={{
            width: "100%",
            height: "300px"
          }}
          className="layout-heropage"
        >
            <IconBtn 
                clickEvent={() => console.log("test") }
                type="button"
                Icon={IoPlaySharp}
                size={30}
                style={{
                  backgroundColor: "#00FF41"
                }}
            />
            <p>Iniciar Treino</p>
        </LayoutCard>
      </section>
      <section className="home-cardBtns">
        <LayoutCard>
          <IconBtn
            clickEvent={() => console.log("test") }
            type="button"
            Icon={FaTableList }
          />
          <h3>Listar Exercícios</h3>
          <p>Ver Biblioteca</p>
        </LayoutCard>
        <LayoutCard>
          <IconBtn
            clickEvent={() => console.log("test") }
            type="button"
            Icon={FiPlusCircle}
          />
          <h3>Criar Exercícios</h3>
          <p>Personalizar</p>
        </LayoutCard>
      </section>

    </div>
  );
}
