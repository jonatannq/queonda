import { useState } from "react"

function Home(){
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const handleChange = (e) => {
        setMessage(e.target.value)
        //console.log(message) aqui tengo el valor del input 
    }
    const submit = () => {
        setMessages([...messages, message])
        setMessage("")
    }

    return(
        <main>
            <h1>Que onda</h1>

            <section>
                <h2>Contactos</h2>
                <p>Lista de contactos</p>
                <p>contacto miguel</p>
                <p>contacto alondra</p>
                <p>contacto juan</p>
                <p>contacto orlando</p>
            </section>

            <section>
                <h2>Chat con Miguel</h2>
                <div>
                    <h3>Contenedor del chat</h3>
                    <p>Mesaje de miguel</p>
                    <h3>Mis mensajes</h3>
                    {messages.map((msg, index) => (
                        <p key={index}>{msg}</p>
                    ))}
                    <input value={message} type="text" onChange={handleChange}/>
                    <button onClick={submit}>Send</button>
                </div>
            </section>
        </main>
    )
}

export default Home