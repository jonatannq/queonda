const express = require("express")
const cors = require("cors")
const app = express()

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



app.listen(3000, () => console.log("Servidor funcionando"))