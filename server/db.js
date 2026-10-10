const mysql = require("mysql2")
require('dotenv').config()

const connect = mysql.createConnection({
    host: process.env.DB_HOST ,
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
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
