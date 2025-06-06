const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // Requerido por Render para conexiones seguras
  }
});

async function testConnection() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log("Conexión exitosa a la base de datos, hora:", res.rows[0].now);
    process.exit(0);
  } catch (err) {
    console.error('Error de conexión:', err);
    process.exit(1);
  }
}

testConnection();
