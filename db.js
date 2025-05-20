const mysql = require("mysql2/promise")
const pool = mysql.createPool({
    host: 'localhost' ,
    user: 'root',
    password:'sabby123',
    database:'gtbit_youth_union',
    // host: process.env.host ,
    // user: process.env.user,
    // password:process.env.password,
    // database:process.env.database,
    waitForConnections: true,
    connectionLimit: 10
})

module.exports=pool