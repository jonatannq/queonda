import { Link, useNavigate } from 'react-router-dom'
import Form from '../components/form'
import axios from 'axios'

function Auth(){

    const  navigate = useNavigate()

    const handleSubmit = async (form) => {
        try {
            const response = await axios.post("http://localhost:3000/login", form) 
            console.log(response.data.user)//set user
            navigate("/")
        } catch (e) {
            console.log(e.response.data.err)
        }
    }

    const inputs = [
        { name: "user", type: "text", place: "Usuario" },
        { name: "pass", type: "password", place: "Contraseña" }
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