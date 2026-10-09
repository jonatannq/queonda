
const express = require("express")
const app = express()

const users = [
    {
        name: "JUAN"
    },
    {
        name: "Alondra"
    }
]

app.get("/", (req, res) => {
    res.send(users)
})

app.listen(3000, ()=> console.log("Escuchando en el puerto 3000"))