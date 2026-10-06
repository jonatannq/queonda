import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { userStore } from '../store/userStore'

function Login(){
 
    const {user, setUser } = userStore()
    const navigate = useNavigate()
    const [err, setErr] = useState("")
    const [userR, setUserR] = useState({})

    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }  

    const handleSubmit = async (e) => {
        e.preventDefault()
        //console.log(form.password, form.username)
        const response = await axios.post("http://localhost:3000/", form)
        setUser(response.data)

        if(!user){
            return
        }
         
        navigate("/")

        //setErr(response.data.mensaje)
        
       
        /*if(form.username === "jonatan")
            
        else {
            return
        }*/
    }

    return(
        <main>
            <h1>Inicia sesion</h1>
            {err && <p>{err}</p>}
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
                <button>
                    Iniciar Sesion
                </button>
            </form>

        </main>
    )
}

export default Login