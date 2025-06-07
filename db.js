const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

pool.getConnection()
  .then(conn => {
    console.log(" Conexão com o banco estabelecida com sucesso!");
    conn.release();
  })
  .catch(err => {
    console.error(" Erro ao conectar no banco:", err.message);
  });

module.exports = pool;
