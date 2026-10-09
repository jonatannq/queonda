import { useNavigate } from 'react-router-dom'

function Sign(){

    const navigate = useNavigate()

    return(
        <main>
            <h1>Crea una cuenta en QueOnda</h1>
            <button onClick={() => navigate("/auth")}>Ya tengo cuenta</button>
        </main>
    )
}

export default Sign