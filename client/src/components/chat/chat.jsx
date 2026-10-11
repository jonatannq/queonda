import { useEffect, useState } from "react"
import api from '../../services/api'
import styles from './chat.module.scss'
import {LucideSendHorizontal, Send, SendHorizonalIcon, SendIcon, SendToBackIcon} from 'lucide-react'

function Chat(){

    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])

    const get = async () => {
        const response = await api.get("/chat")
        setMessages(response.data.messages)
    }

    useEffect(() => {
        get()
    }, [])


    const enviar = async () => {
        if(!message) return console.log("Los mensajes no pueden ir vacios")

        try {
            const response = await api.post("/chat", {
                message: message
            })
        } catch (e) { return console.log(e)  }
        
        setMessage("")
    }

    return(
        <section className={styles.containerchat}>
            <h2>Chat</h2>

            <div className={styles.container}>
                {messages.map((msg) => (
                
                    <p key={msg.id} className={styles.message}>{msg.msg}</p>
                    
                ))}
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