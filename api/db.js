import mysql from "mysql"

// Conexão com o MySQL
export const db = mysql.createConnection({
    host: "localhost",
    port: "3307",
    user: "root",
    password: "etecjau",
    database: "db_crud"
})