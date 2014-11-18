'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TaskSchema = new Schema({
    name: String,
    due: Date,
    priority: {type: Schema.Types.ObjectId, ref: 'Priority'},
    created: {type: Date, default: Date.now},
    isComplete: {type: Boolean, default: false}
});

module.exports = mongoose.model('Task', TaskSchema);