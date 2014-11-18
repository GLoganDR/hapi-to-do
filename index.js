'use strict';

var port    = process.env.PORT,
    Hapi    = require('hapi'),
    server  = new Hapi.Server(port);


require('./routes')(server);
require('./mongoose')(function(){
    require('./plugins')(server, function(){
        server.start(function () {
            server.log('info', 'Server running at: ' + server.info.uri);
        });
    });
});


