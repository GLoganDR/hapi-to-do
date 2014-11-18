'use strict';

var Priority = require('../models/priority');

exports.index = function(request, reply){
    Priority.find(function(err, priorities){
        reply(priorities);
    });
};

exports.new = function(request, reply){
    var p = new Priority(request.payload);
    p.save(function(){
        reply(p);
    });
};