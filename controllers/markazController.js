
const MarkazModel = require('../model/Markaz') 
const { v4: uuid } = require('uuid');
const path = require('path');

async function create(req, res) {
  const { name, date } = req.body;

  const markazs = new MarkazModel({
 name,
 date
  });

  await markazs.save();

  res.send('Created!');
}

async function getAll(req, res) {
  const markazs = await MarkazModel.find();

  res.send(markazs);
}

async function remove(req, res) {
  const { id } = req.params;

  await MarkazModel.findByIdAndDelete(id);

  res.send('Deleted');
}

module.exports = { create, getAll, remove };
