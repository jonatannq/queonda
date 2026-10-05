import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login(){
 
    const navigate = useNavigate()

    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }  

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log()
        if(form.username === "jonatan")
            navigate("/")
        else {
            return console.log("No puedes entrar")
        }
    }

    return(
        <main>
            <h1>Inicia sesion</h1>

            <form onSubmit={handleSubmit}>
                <input
                    name='username' 
                    type="text" 
                    placeholder="User"
                    onChange={handleChange}
                />
                <input
                    name='password' 
                    type="password" 
                    placeholder="password"
                    onChange={handleChange}
                />
                <button type="submit">
                    Iniciar Sesion
                </button>
            </form>

        </main>
    )
}

export default Login