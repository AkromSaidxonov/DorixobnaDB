
const MuruvvatModel = require('../model/Muruvvat') 
const { v4: uuid } = require('uuid');
const path = require('path');

async function create(req, res) {
  const { name, date } = req.body;

  const muruvvats = new MuruvvatModel({
 name,
 date
  });

  await muruvvats.save();

  res.send('Created!');
}

async function getAll(req, res) {
  const muruvvats = await MuruvvatModel.find();

  res.send(muruvvats);
}

async function remove(req, res) {
  const { id } = req.params;

  await MuruvvatModel.findByIdAndDelete(id);

  res.send('Deleted');
}

module.exports = { create, getAll, remove };
