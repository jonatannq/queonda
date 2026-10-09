import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Signup(){

    const navigate = useNavigate()
    const [err, setErr] = useState("")
    const [form, setForm ] = useState({
        name: "",
        last: "",
        data: "",
        password: ""
    })

    const handleSign = async (e) => {
        e.preventDefault()
        
        try {
            const response = await axios.post("http://localhost:3000/signup", form)
            navigate("/login")
        } catch (err) {
            setErr(err.response.data.err)
        }
    }

    const handleLogin = () => {
        navigate("/login")
    }


    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    return(
        <main>
            <h1>Crea una cuenta en Queonda</h1>
            {err && <p>{err}</p>}
            <form onSubmit={handleSign}>
                <input
                    name='name'
                    type="text" 
                    placeholder="Nombre"
                    onChange={handleChange}/>

                <input
                    name='last'
                    type="text" 
                    placeholder="Apellido"
                    onChange={handleChange}/>

                <input
                    name='data'
                    type="text" 
                    placeholder="Ingresa tu numero o correo"
                    onChange={handleChange}/>

                <input
                    name='password'
                    type="password" 
                    placeholder="Contraseña"
                    onChange={handleChange}/>

                <button>
                    Enviar
                </button>
            </form>
            <button onClick={handleLogin}>Ya tengo cuenta</button>
        </main>
    )
}

export default Signup