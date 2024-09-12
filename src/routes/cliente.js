const express = require('express');
const router = express.Router()
const cliente = require('../controllers/cliente.js');
const cep = require('../middlewares/cep.js')

router.post('/',cep, cliente.createCliente);
router.get('/', cliente.getClientes);
router.get('/:id', cliente.getClienteById);
router.put('/:id',cep, cliente.updateCliente);
router.delete('/:id', cliente.deleteCliente);

module.exports = router;