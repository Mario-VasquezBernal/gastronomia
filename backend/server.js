const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión usando DATABASE_URL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Endpoint de ejemplo
app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios'); // Ajusta el nombre si es necesario
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error en la consulta a la base de datos' });
  }
});

// Puerto flexible para Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend corriendo en el puerto ${PORT}`);
});

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Servidor backend funcionando 👍');
});
