const express = require("express")
const cors = require("cors")
const mysql = require("mysql2")
const app = express()

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "alon26&",
    database: "chat"
})


app.post("/", (req, res) => {
    const { username, password } = req.body
    
    db.query("SELECT * FROM users WHERE name = ? AND password = ?",
        [username, password], (err, result) => {
        if(err){
            console.log("Error")
            return res.status(400).json({mensaje: "error"})
        }
        
        if(result.length === 0){
            return res.status(401).json({
                mensaje: "Usuario o contraseña incorrectos"
            })
        }
        const user = result[0]
        res.json({
            id: user.id,
            username: user.name
        })

    })

})


app.post("/signup",  (req, res) => {
    const { name, last, data, password } = req.body
    console.log(name, last, data, password)
     db.query("INSERT INTO users(name, last, data, password) VALUES (?,?,?,?)",
        [name, last, data, password], (err, result) => {
            
            if(err){
                return res.status(401).json({err: "No se puedo crear la cuenta"})
            }
            res.json({
                message: "Usuario creado con exito"
            })
        })
})

app.listen(3000, () => console.log("Servidor funcionando"))