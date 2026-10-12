import { useEffect, useState, useRef } from "react"
import api from '../../services/api'
import styles from './chat.module.scss'
import { SendHorizonalIcon } from 'lucide-react'
import { userStore } from "../../../store/userStore"

function Chat(){

    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const { user } = userStore()

    const divRef = useRef(null)

    const get = async () => {
        const response = await api.get("/chat")
        setMessages(response.data.messages)
    }

    useEffect(() => {
        get()
    }, [])


    useEffect(() => {
        divRef.current?.scrollIntoView({behavior: 'auto'})
    }, [messages])


    
    const getHour = () => {
        const time = new Date().toLocaleTimeString("es-MX", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        })
        return time
    }
    

    const enviar = async () => {
        if(!message) return 

        const time = getHour()

        try {
            const response = await api.post("/chat", {
                id: user.id,
                message: message,
                time: time
            })
        } catch (e) { return console.log(e)  }

        setMessage("")
    }

    const vaciar = async () =>  {
        try {
            const response = await api.delete("/chat")
        } catch (error) {
            console.log("No se pudo borrar el chat")
        }
    }


    return(
        <section className={styles.containerchat}>
            <div className={styles.header}>
                <h2>Chat</h2>
                <button onClick={vaciar}>Vaciar chat</button>
            </div>
            
            <div className={styles.container}>
                
                {messages.map((msg) => ( 
                    <>
                        <p key={msg.id} className={`${styles.message} ${user.id !== msg.sender_id && styles.other }`}>
                            {msg.msg}
                        </p>
                        <span  className={`${styles.message} ${user.id !== msg.sender_id && styles.other }`}>{msg.send_at}</span>
                    
                    </>
                ))}
                <div ref={divRef}/>
            </div>  
            
            <div className={styles.containerinput}>
                <input type="text" value={message} placeholder="Escribe un mensaje...." onChange={(e) =>  setMessage(e.target.value)}/>
                <button className={styles.btnsend} onClick={enviar}>
                    <SendHorizonalIcon  className={styles.icon}/>
                </button>
            </div>
        </section>
    )
}
export default Chat