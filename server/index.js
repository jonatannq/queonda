
const express = require("express")
const db = require("./db.js")
const app = express()


app.get("/", (req, res) => {
    db.query("SELECT * FROM users",(err, result) => {
        if(err){
            console.log("Hubo un error")
        }
        res.send(result)
    })
})

app.listen(3000, () => console.log("Escuchando en el puerto 3000"))