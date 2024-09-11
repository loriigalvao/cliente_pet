const express = require('express');
const router = express.Router();
const pet = require('../controllers/pet.js');

router.post('/', pet.createaPet);
router.get('/', pet.getPets);
router.get('/:id', pet.getPetById);
router.put('/:id', pet.updatePet);
router.delete('/:id', pet.deletePet);

module.exports = router;