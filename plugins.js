'use strict';

module.exports = function(server, cb){
    server.pack.register([
        {
            plugin: require('good'),
            options: {
                reporters: [{
                    reporter: require('good-console'),
                    args:[{ log: '*', request: '*' }]
                }]
            }
        },
        {
            plugin: require('lout')
        }],
        function(err){
        if(err){
            throw err; // something bad happened loading the plugin
        }
        if(cb){return cb();}
    });
};