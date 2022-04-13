const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const ByudjetSchema = new Schema({
name:String,
date:String
});

module.exports = mongoose.model('Byudjet', ByudjetSchema);
