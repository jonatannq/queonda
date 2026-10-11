import { Link, useNavigate } from 'react-router-dom'
import api from '../../services/api'
import Form from '../../components/form/form'
import { useState } from 'react'
import styles from './auth.module.scss'


function Auth(){

    const  navigate = useNavigate()
    const [err, setErr] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!form.user || !form.pass){
            return setErr("Todos los campos son necesarios")
        }
        try {
            const response = await api.post("/login", form) 
            console.log(response.data.user)//set user
            navigate("/")
        } catch (e) {
            return setErr(e.response.data.err)
        }
    }

    const[form, setForm] = useState({ })
    
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