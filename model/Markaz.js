const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const MarkaztSchema = new Schema({
name:String,
date:String
});

module.exports = mongoose.model('Markaz', MarkaztSchema);
