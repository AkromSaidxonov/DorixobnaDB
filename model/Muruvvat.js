const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const MuruvvatSchema = new Schema({
name:String,
date:String
});

module.exports = mongoose.model('Muruvvat', MuruvvatSchema);
