const express = require('express');
const connectDB = require('./config/db');
const PORT = 5000;

const cliente_routes = require('./routes/cliente.js');
const pet_routes= require('./routes/pet.js');

const app = express();

// Conectar ao banco de dados


// Middleware
app.use(express.json());

// Rotas
app.use('/api/clientes', cliente_routes);
app.use('/api/pet', pet_routes);


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});