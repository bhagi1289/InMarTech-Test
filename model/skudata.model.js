// models/SKUData.js
const mongoose = require('mongoose');

const skuDataSchema = new mongoose.Schema({
  SKU: {
    type: Number,
    required: true
  },
  NAME: {
    type: String,
    required: true
  },
  LOCATION: {
    type: String,
    required: true
  },
  DEPARTMENT: {
    type: String,
    required: true
  },
  CATEGORY: {
    type: String,
    required: true
  },
  SUBCATEGORY: {
    type: String,
    required: true
  }
});

const SKUData = mongoose.model('skudata', skuDataSchema, 'skudata');

module.exports = SKUData;
