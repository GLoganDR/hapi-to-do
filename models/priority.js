'use strict';

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var PrioritySchema = new Schema({
    level: Number,
    name: String,
    color: String
});

module.exports = mongoose.model('Priority', PrioritySchema);