import { Link } from 'react-router-dom'

function Auth(){


    return(
        <main>
            <h1>Inicia Sesion</h1>
            <Link to="/sign">No tienes cuenta?</Link>
            
        </main>
    )
}

export default Auth 