const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',          // Cambia por tu usuario de PostgreSQL
  host: 'localhost',         // Cambia si usas otro host
  database: 'login_app_db',   // Cambia por el nombre de tu base de datos
  password: 'cbd4Hbxn', // Cambia por tu contraseña
  port: 5432,                // Puerto por defecto de PostgreSQL
});

async function testConnection() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Conexión exitosa a la base de datos, hora:', res.rows[0].now);
    process.exit(0);
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err);
    process.exit(1);
  }
}

testConnection();
