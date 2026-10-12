import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import { useState } from 'react'
import styles from './sign.module.scss'
import {BackpackIcon, ChevronDown, ChevronLeft} from 'lucide-react'


function Sign(){

    const navigate = useNavigate()
    const[form, setForm] = useState({ })
    const [err, setErr] = useState("")

    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!form.name || !form.last || !form.contact || !form.pass)
            return setErr("Todos los campos son requeridos")
        
        try {
            const response = await api.post("/", form)
            console.log(response.data.mensaje)
            navigate("/auth")
        } catch (e) {
            if(e.response){
                return setErr(e.response.data.err)
            }else if(e.request){
                return setErr("Hubo un error en el servidor, intenta mas tarde")
            }
        }
    }


    return(
        <main className={styles.container}>
            <button onClick={() => navigate("/auth")}>
                <ChevronLeft />
            </button>
            <form  className={styles.form} onSubmit={handleSubmit} method='POST'>
                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Crea una cuenta en QueOnda</legend>
                    {err && 
                        <p className={styles.err}>{err}</p>
                    }
                    <label htmlFor="name">Nombre</label>
                    <div className={styles.flex}>  
                        <input id='name' name='name' type="text" placeholder='Nombre' onChange={handleChange}/>
                        <input id='last' name='last' type="text" placeholder='Apellido' onChange={handleChange}/>
                    </div>

                    <div>
                        <label htmlFor="mail">Correo</label>
                        <input id='mail' name='contact' type="text" placeholder='Correo o numero' onChange={handleChange}/>
                    </div>
                    
                    <label htmlFor="pass">Contraseña</label>
                    <input id='pass' name='pass' type="password" placeholder='Contraseña' 
                        onChange={handleChange}
                        minLength={8} required
                    />

                    <button className={styles.btn} type='submit'>Enviar</button>
                    <button className={styles.btn} type='button' onClick={() => navigate("/auth")}>Ya tengo cuenta</button>
                </fieldset>
                
            </form>      
        </main>
    )
}

export default Sign