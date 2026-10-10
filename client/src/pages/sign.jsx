import { useNavigate } from 'react-router-dom'
import Form from '../components/form'
import { useState } from 'react'

function Sign(){

    const handleSubmit = (e) => {
        console.log(e)
    }

    const navigate = useNavigate()

    const inputs = [
        { name: "name", type: "text", place: "Nombre" },
        { name: "last", type: "text", place: "Apellido" },
        { name: "contact", type: "text", place: "Numero o correo electronico", },
        { name: "pass", type: "password", place: "Contraseña" }
    ]

    return(
        <main>
            <h1>Crea una cuenta en QueOnda</h1>
            <Form
                inputs={inputs} 
                textbtn={"Enviar"} 
                onSubmit={handleSubmit}
            /> 
            <button onClick={() => navigate("/auth")}>Ya tengo cuenta</button>
        </main>
    )
}

export default Sign