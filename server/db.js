const mysql = require("mysql2")
require('dotenv').config()

const connect = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "alon26&",
    database: process.env.DB_NAME || "chat",
    port: process.env.DB_PORT
})

connect.connect((err) => {
    if(err) {
        console.log("Hubo un error")
        return
    }
    console.log("Conexion existosa")
})

module.exports =  connect
