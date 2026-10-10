import { useState } from 'react'
import { Link } from 'react-router-dom'
import Form from '../components/form'

function Auth(){

    const handleSubmit = (e) => {
        console.log(e)
    }


    const inputs = [
        {
            name: "user",
            type: "text",
            place: "Usuario"
        },
        {
            name: "pass",
            type: "password",
            place: "Contraseña",
        }
    ]

    return(
        <main>
            <h1>Inicias Sesion</h1>
            
            <Form 
                inputs={inputs} 
                textbtn={"Iniciar Sesion"} 
                onSubmit={handleSubmit}
            />

            <Link to="/sign">No tienes cuenta?</Link>
            
        </main>
    )
}

export default Auth 