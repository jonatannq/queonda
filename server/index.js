const express = require("express")
const cors = require("cors")
const db = require("./db.js")

const app = express()
app.use(cors())
app.use(express.json())

require('dotenv').config()
const PORT = process.env.PORT || 3000;

app.post("/chat", (req, res) => {
    const {message} = req.body
    db.query("INSERT INTO msg(msg) VALUES(?)", [message], (err, result) => {
        if(err){
            return console.log("Hubo un error")
        }
        return res.json({
            msg: "Enviado"
        })
    })
})

app.get("/chat", (req, res) => {
    db.query("SELECT * FROM msg", (err, result) => {
        if(err){
            return res.json({msg: "Hubo un error "})
        }

        return res.json({
            messages: result
        })
        
    })
})



app.post("/login", (req, res) => {
    const {user, pass} = req.body
    db.query("SELECT id, name FROM users WHERE name = ? AND password = ?", [user, pass], (err, result) => {
        if(err){
            return res.status(401).json({
                err: "Hubo un error en el servidor 1002"
            })
        }

        if(result.length === 0){
            return res.status(401).json({
                err: "Usuario o contraseña incorrectos"
            })
        }


        const user = result[0]

        res.json({
            user
        })

    })

})

app.delete("/chat", (req, res) => {
    db.query("DELETE FROM msg", (err, resultado) => {
        if(err){
            return console.log("No se pudo borrar")
        }
        return res.json({msg: "se pudo borrar"})
    })
})

app.post("/", (req, res) => {
    const { name, last, contact, pass } = req.body

    if(!name || !last || !contact || !pass){
        return res.status(400).json({
            err: "Todos los campos son requeridos"
        })
    }

    db.query("INSERT INTO users(name, last, data, password) VALUES(?, ?, ?, ?)", [name, last, contact, pass], (err, result) => {
        if(err){
            return res.status(400).json({
                err: "Hubo un error en el servidor 1001"
            })
        }

        res.status(200).json({
            mensaje: "Usuario creado"
        })
    })

    
})



app.listen(PORT, () => console.log("Escuchando en el puerto 3000"))