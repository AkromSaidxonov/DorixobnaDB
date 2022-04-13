
const ByudjetModel = require('../model/Byudjet') 
const { v4: uuid } = require('uuid');
const path = require('path');

async function create(req, res) {
  const { name, date } = req.body;

  const byudjets = new ByudjetModel({
 name,
 date
  });

  await byudjets.save();

  res.send('Created!');
}

async function getAll(req, res) {
  const byudjets = await ByudjetModel.find();

  res.send(byudjets);
}

async function remove(req, res) {
  const { id } = req.params;

  await ByudjetModel.findByIdAndDelete(id);

  res.send('Deleted');
}

module.exports = { create, getAll, remove };
