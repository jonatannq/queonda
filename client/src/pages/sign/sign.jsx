import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import Form from '../../components/form/form'


function Sign(){

    const navigate = useNavigate()

    const inputs = [
        { name: "name", type: "text", place: "Nombre" },
        { name: "last", type: "text", place: "Apellido" },
        { name: "contact", type: "text", place: "Numero o correo electronico", },
        { name: "pass", type: "password", place: "Contraseña" }
    ]

    const handleSubmit = async (form) => {

        if(!form.name || !form.last || !form.contact || !form.pass){
            return console.log("Todos los campos son requeridos")
        }

        try {
            const response = await api.post("/", form)
            console.log(response.data.mensaje)
            //navigate("/login")
        } catch (e) {
            if(e.response){
                return console.log(e.response.data.err)
            }else if(e.request){
                return console.log("Hubo un error en el servidor, intenta mas tarde")
            }
        }
    }


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