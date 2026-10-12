import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import styles from './auth.module.scss'
import { userStore } from '../../../store/userStore'


function Auth(){

    const  navigate = useNavigate()
    const [err, setErr] = useState("")
    const[form, setForm] = useState({ })
    const { setUser } = userStore()


    useEffect(() => {
        if(user){
            navigate("/")
        }
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!form.user || !form.pass)
            return setErr("Todos los campos son necesarios")

        try {
            const response = await api.post("/login", form) 
            setUser(response.data.user)
            navigate("/")
        } catch (e) {
            return setErr(e.response.data.err)
        }
    }
    
    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }
    

    return(
        <main className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Inicia Sesión en QueOnda</legend>

                    {err && 
                        <p className={styles.err}>{err}</p>
                    }

                    <label htmlFor="user">Usuario</label>
                    <input id='user' name='user' type="text" placeholder='Usuario' onChange={handleChange}/>
                    <label htmlFor="pass">Contraseña</label>
                    <input id='pass' name='pass' type="password" placeholder='Cotraseña' onChange={handleChange}/>
                    <button className={styles.btn}>Iniciar Sesión</button>
                    <Link to="/sign">No tienes cuenta?</Link>
                </fieldset>
            </form>
            
        </main>
    )
}

export default Auth 