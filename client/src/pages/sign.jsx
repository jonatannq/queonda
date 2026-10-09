import { useNavigate } from 'react-router-dom'

function Sign(){

    const navigate = useNavigate()

    return(
        <main>
            <h1>Crea una cuenta en QueOnda</h1>
            <form>
                <input type="text" placeholder='Nombre'/>
                <input type="text" placeholder='Apellido'/>
                <input type="text" placeholder='Numero o mail'/>
                <input type="password" placeholder='password'/>
                <button>Enviar</button>
            </form>
            <button onClick={() => navigate("/auth")}>Ya tengo cuenta</button>
        </main>
    )
}

export default Sign