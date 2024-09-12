const mongoose = require('../config/db.js');

const PetSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  
});

const Cliente = mongoose.model('Pet', PetSchema);
module.exports = Cliente;