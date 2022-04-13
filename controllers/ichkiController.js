
const IchkiModel = require('../model/Ichki') 
const { v4: uuid } = require('uuid');
const path = require('path');

async function create(req, res) {
  const { name, date } = req.body;

  const ichkis = new IchkiModel({
 name,
 date
  });

  await ichkis.save();

  res.send('Created!');
}

async function getAll(req, res) {
  const ichkis = await IchkiModel.find();

  res.send(ichkis);
}

async function remove(req, res) {
  const { id } = req.params;

  await IchkiModel.findByIdAndDelete(id);

  res.send('Deleted');
}

module.exports = { create, getAll, remove };
