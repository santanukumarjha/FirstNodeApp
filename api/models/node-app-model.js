'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
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

module.exports = mongoose.model('Tasks', TaskSchema);