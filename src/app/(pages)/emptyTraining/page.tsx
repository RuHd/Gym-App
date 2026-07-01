import Link from "next/link"

const page = () => {
  return (
    <div 
        style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            textAlign: "center"
        }}
    
    >
        <h2
            style={{
                fontSize: "2em"
            }}
        
        >Cadastre um exercício para começar o treino</h2>
        <section>
            <Link  
                href={'/AddTreino'}
                style={{backgroundColor: "#00ff41", padding: "10px", fontSize: "1.2rem", color: "black", borderRadius: "5px"}}
            
            > 
                Cadastrar Exercício
            </Link>
        </section>
    </div>
  )
}

export default page