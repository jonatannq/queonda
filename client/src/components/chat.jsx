import { useState } from "react"

function Chat() {

    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])

    const handleSubmit = () => {
        setMessages([...messages, message])
        setMessage("")
    }

    return (
        <section>
            <h2>Chat con "user"</h2>
            <p>Mensaje de user</p>
            {
            messages.map((msg, index) => (
                <p key={index} >
                    {msg}
                </p>
            ))
            }
            <input value={message} type="text" placeholder="Escribir mensaje..." onChange={(e) => setMessage(e.target.value)}/>
            <button onClick={handleSubmit}>Enviar</button>
        </section>
    )
}

export default Chat
