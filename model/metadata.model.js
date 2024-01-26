// models/MetaData.js
const mongoose = require('mongoose');

const metaDataSchema = new mongoose.Schema({
  Location: {
    type: String,
    required: true
  },
  Department: {
    type: String,
    required: true
  },
  Category: {
    type: String,
    required: true
  },
  SubCategory: {
    type: String,
    required: true
  }
},{
    collection:"metadata",
    strict: true // Enforcing the schema to be strict

});

const MetaData = mongoose.model('metadata', metaDataSchema, 'metadata');

module.exports = MetaData;
