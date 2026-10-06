const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

const users = [
    {
        id: 1,
        username: "jonatan",
        password: "jonatan1"
    },
    {
        id: 2,
        username: "alon",
        password: "alon1"
    }
]

app.get("/", (req, res) => {
    res.json(users)
})


app.post("/",  (req, res) => {
    const {username, password} = req.body
    
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

app.listen(3000, () => console.log("Servidor funcionando"))