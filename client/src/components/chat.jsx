import { useEffect, useState } from "react"
import axios from 'axios'

function Chat(){

    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])

    const get = async () => {
        const response = await axios.get("http://localhost:3000/chat")
        setMessages(response.data.messages)
    }

    useEffect(() => {
        get()
    }, [])

    


    const enviar = async () => {
        if(!message){
            return console.log("Los mensajes no pueden ir vacios")
        }

        try {
            const response = await axios.post("http://localhost:3000/chat", {
                message: message
            })

        } catch (e) {
            return console.log(e) 
        }
        
        setMessage("")
    }

    return(
        <section>
            <h2>Chat con user</h2>

            {messages.map((msg) => (
                <p>{msg.msg}</p>
            ))}

            <input type="text" value={message} placeholder="Escribe un mensaje...." onChange={(e) =>  setMessage(e.target.value)}/>
            <button onClick={enviar}>Enviar</button>
        </section>
    )
}
export default Chat