const express = require('express');
const router = express.Router();
const cliente = require('../controllers/cliente.js');

router.post('/', cliente.createCliente);
router.get('/', cliente.getClientes);
router.get('/:id', cliente.getClienteById);
router.put('/:id', cliente.updateCliente);
router.delete('/:id', cliente.deleteCliente);

module.exports = router;