import { useState } from 'react'
import { Link } from 'react-router-dom'

function Auth(){

    const[form, setForm] = useState({
        user: "",
        pass: ""
    })

    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }

    return(
        <main>
            <h1>Inicia Sesion</h1>

            <form onSubmit={handleSubmit}>
                <input name="user" type="text" placeholder='Usuario' onChange={handleChange}/>
                <input name="pass" type="password" placeholder='contraseña' onChange={handleChange}/>
                <button>Iniciar Sesion</button>
            </form>

            <Link to="/sign">No tienes cuenta?</Link>
            
        </main>
    )
}

export default Auth 