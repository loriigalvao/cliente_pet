const Pet = require('../models/pet.js');

exports.createPet = async (req, res) => {
  try {
    const pet = new Pet(req.body);
    await pet.save();
    res.status(201).json(pet);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar pet' });
  }
};

exports.getPets = async (req, res) => {
  try {
    const clientes = await Pet.find();
    res.status(200).json(Pets);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao buscar pets' });
  }
};

exports.getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    res.status(200).json(pet);
  } catch (error) {
    res.status(404).json({ error: 'Pet não encontrado' });
  }
};


//{ new: true } retorna o novo documento atualizado
exports.updatePet = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(pet);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar pet' });
  }
};

exports.deletePet = async (req, res) => {
  try {
    await Pet.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar pet' });
  }
};