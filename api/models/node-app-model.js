'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var OrderSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the Order'
  },
  quantity: {
    type: Number,
    required: true
  },
  createdTillNow:{
    type: Number,
    required: true,
    default: 0
  },
  predicted:{
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Orders', OrderSchema);