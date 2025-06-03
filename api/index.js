import express from 'express';
import serverless from 'serverless-http';

const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Ejemplo de ruta GET
app.get('/hello', (req, res) => {
  res.json({ message: 'Hola desde backend serverless en Vercel!' });
});

// Exporta la función handler para Vercel
export const handler = serverless(app);
