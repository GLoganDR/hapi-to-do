'use strict';

var Task = require('../models/task');

exports.index = function(request, reply){
    Task.find().populate('priority').exec(function(err, tasks){
        reply(tasks);
    });
};

exports.new = function(request, reply){
    var t = new Task(request.payload);
    t.save(function(){
        reply(t);
    });
};

exports.delete = function(request, reply){
    Task.remove({_id:request.params.id}, function(err){
        reply('Task Deleted');
    });
};

exports.show = function(request, reply){
    Task.findById(request.params.id).populate('priority').exec(function(err, t){
        reply(t);
    });
};

exports.update = function(request, reply){
    Task.findById(request.params.id, function(err, t){
        t.isComplete = request.params.isComplete;
        t.save(function(){
            reply(t);
        });
    })
};