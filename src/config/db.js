import mysql from 'mysql2/promise'

let db;

try {
    
 db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"soft_agenda",
    waitForConnections:true
})

console.log("conectado com sucesso");

} catch (e) {
    console.log("Erro ao tentr conectar o banco:" +e)
    
}

export default db;