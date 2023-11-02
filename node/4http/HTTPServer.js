const http = require("http");
const server = new http.Server();
server.listen(4848, "localhost");
let counter = 0;
server.on('request',function(req,res){
    counter++;
    res.end("Hello world ");
});