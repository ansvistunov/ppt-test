const http = require("http");
const url = require("url");
const fs = require("fs");
const server = new http.Server();
server.listen(4848, "localhost");

server.on('request',function(req,res){
    let urlParsed = url.parse(req.url, true);
    console.log(urlParsed);
    let data;
    if (req.url == "/") {
        data = fs.readFileSync("index.html");
        res.end(data);
    }else{
        try {
            data = fs.readFileSync("." + urlParsed.path);
            res.end(data);
        }catch(error){
            res.status = 404;
            res.end("Page not found");
        }
    }
});