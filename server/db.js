
const mysql = require("mysql2")

const connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "alon26&",
    database: "chat"
})

module.exports =  connect
