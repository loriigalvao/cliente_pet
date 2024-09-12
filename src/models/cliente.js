const mongoose = require('../config/db.js');
// const { object } = require('webidl-conversions');


const ClienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  endereco: { type: Object, required: true }
//telefones: {type: Array, required: true}
});

const Cliente = mongoose.model('Cliente', ClienteSchema);
module.exports = Cliente;