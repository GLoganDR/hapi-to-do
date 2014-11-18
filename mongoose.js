'use strict';
var dbName   = process.env.DB,
    mongoose = require('mongoose');

module.exports = function(cb){
    mongoose.connect(dbName);

    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error. Thanks mongoose...'));

    db.once('open', function(){
        if(cb){cb();}
    });
};
