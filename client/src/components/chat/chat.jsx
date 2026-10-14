import { useEffect, useState } from "react"
import api from '../../services/api'
import styles from './chat.module.scss'
import {  CircleMinus, MoreVertical, SendHorizonalIcon } from 'lucide-react'
import { userStore } from "../../../store/userStore"
import ChatList from "./chatlist"

function Chat(){

    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const { user } = userStore()
    const [show, setShow] = useState(false)
    const [modal, setModal] = useState(false)
    const get = async () => {
        const response = await api.get("/chat")
        setMessages(response.data.messages)
    }

    useEffect(() => {
        get()
    }, [])

    const getHour = () => {
        const time = new Date().toLocaleTimeString("es-MX", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        })
        return time
    }
    

    const enviar = async (e) => {
        e.preventDefault()
    
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

    const more = async () =>  {
        setShow(!show)
    }

    const vaciar = async () =>  {
        more()
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
                <button className={styles.more} onClick={more}>
                    <MoreVertical />
                </button>
                
                {show && 
                    
                        <div className={styles.div}>
                            <button className={styles.btndiv} onClick={vaciar}>
                                <CircleMinus />
                                Vaciar chat
                            </button>
                        </div>
                    
                }
            </div>
            <ChatList list={messages} user={user}/>
            <form className={styles.containerinput} onSubmit={enviar}> 
                <input type="text" value={message} placeholder="Escribe un mensaje...." onChange={(e) =>  setMessage(e.target.value)}/>
                <button className={styles.btnsend}>
                    <SendHorizonalIcon  className={styles.icon}/>
                </button>
            </form>
        </section>
    )
}
export default Chat