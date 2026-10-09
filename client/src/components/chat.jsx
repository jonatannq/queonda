import { useState } from "react"

function Chat(){

    const [message, setMessage] = useState("")
    const [messages, setMessageS] = useState([])

    const enviar = () => {
        console.log("Se envio el mensaje")
    }

    return(
        <section>
            <h2>Chat con user</h2>
            <p>mensajes</p>
            
            <input type="text" placeholder="Escribe un mensaje...." onChange={(e) =>  setMessage(e.target.value)}/>
            <button onClick={enviar}>Enviar</button>
        </section>
    )
}
export default Chat