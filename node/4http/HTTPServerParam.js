const http = require("http");
const url = require("url");
const server = new http.Server();
server.listen(4848, "localhost");

server.on('request',function(req,res){
    let urlParsed = url.parse(req.url, true);
    console.log(req.method+" "+req.url);
    console.log(urlParsed);
    if (urlParsed.pathname == "/echo" &&  urlParsed.query.message){
        res.end(urlParsed.query.message);
    }else{
        res.status = 404;
        res.end("Page not found");
    };
});