import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login(){
 
    const navigate = useNavigate()

    const [form, setForm] = useState({
        username: "",
        password: ""
    })
  
    const getUser = async () => {
        const response = await axios.get("http://localhost:3000/")
        console.log(response.data)
    }

    useEffect(() =>  {
        getUser()
    },[])

    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }  

    const handleSubmit = (e) => {
        e.preventDefault()
        if(form.username === "jonatan")
            navigate("/")
        else {
            return  console.log("No puedes entrar ", form)
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
                <button>
                    Iniciar Sesion
                </button>
            </form>

        </main>
    )
}

export default Login