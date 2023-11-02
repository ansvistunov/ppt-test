const EE = require("events").EventEmitter;
const server = new EE();

server.on('request', function(request){
    request.approved = true;
});

server.on('request', function(request){
    console.log(request);
});

server.emit('request',{from:'client1'});
server.emit('request',{from:'client2'});