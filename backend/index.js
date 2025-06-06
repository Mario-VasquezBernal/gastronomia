const express = require('express');
const app = express();

// Middleware para aceptar JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Servidor backend funcionando correctamente!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend corriendo en http://localhost:${PORT}`);
});
