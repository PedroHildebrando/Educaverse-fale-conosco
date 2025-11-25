const mysql = require('mysql2/promise')

//pool de conexão
const pool = mysql.createPool({
    //criar as cofigurações do BD
    host:"localhost",
    user:"root",
    password:"",
    port:"3306",
    database:"educaverse",
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})
// exportando o arquivo db
module.exports = pool