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



app.get("/", (req, res) => {
    res.json(users)
})


app.post("/",  (req, res) => {
    const { username, password } = req.body
    
    const query = users.find((user) =>
        username === user.username)
    
    if(!query  || password !== query.password){
        return res.status(401).json({
            mensaje: "Usuario o contraseña incorrectos"
        })
    }

    res.json({
        id: query.id,
        username: query.username,
    })

})


app.post("/signup",  (req, res) => {
    const { name, last, data, password } = req.body
    if(!name || !last || !data || !password){
        return res.status(401).json({
            err: "Todos los campos son requeridos"
        })
    }


    db.query("INSERT INTO users(name, last, data, password) VALUES (?,?,?,?)",
        [name, last, data, password], (err, result) => {
            
            if(err){
                return res.status(401).json({
                    err: "No se puedo crear la cuenta"
                })
            }
            res.json({
                message: "Usuario creado"
            })
        })
})

app.listen(3000, () => console.log("Servidor funcionando"))