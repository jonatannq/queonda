import { useState } from "react"


function App() {

  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])

  const handleSubmit = () => {
    setMessages([...messages, message])
    setMessage("")
  }

  return (
    <>
      <h1>QueOnda</h1>
      <section>
        <h2>Contactos</h2>
        <p>Contacto user</p>
        <p>Contacto user2</p>
        <p>Contacto user3</p>
      </section>
      <section>
        <h2>Chat con "user"</h2>
        <p>Mensaje de user</p>
        {
          messages.map((msg) => (
            <p>{msg}</p>
          ))
        }
        <input value={message} type="text" placeholder="Escribir mensaje..." onChange={(e) => setMessage(e.target.value)}/>
        <button onClick={handleSubmit}>Enviar</button>
      </section>
    </>
  )
}

export default App
