const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configura la conexión a PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'login_app_db',
  password: 'cbd4Hbxn',
  port: 5432,
});

// Endpoint para obtener datos de una tabla real
app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios'); // <-- Cambia por el nombre correcto
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error en la consulta a la base de datos' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend corriendo en http://localhost:${PORT}`);
});

// Ruta raíz simple
app.get('/', (req, res) => {
  res.send('Servidor backend funcionando 👍');
});
