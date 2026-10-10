
const express = require("express")
const cors = require("cors")
const db = require("./db.js")

const app = express()
app.use(cors())
app.use(express.json())


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
                err: "Hubo un error en el servidor"
            })
        }

        res.status(200).json({
            mensaje: "Usuario creado"
        })
    })

    
})



app.listen(3000, () => console.log("Escuchando en el puerto 3000"))