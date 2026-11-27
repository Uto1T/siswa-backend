const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dateStrings: true
});

db.connect((err) => {
  if (err) {
    console.error('Gagal terhubung ke MySQL:', err.message);
    return;
  }
  console.log('Berhasil terhubung ke database MySQL (db_siswa)!');
});

module.exports = db;