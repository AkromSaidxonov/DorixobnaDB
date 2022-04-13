const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const IchkiSchema = new Schema({
name:String,
date:String
});

module.exports = mongoose.model('Ichki', IchkiSchema);
