const http = require("http");
const url = require("url");
const fs = require("fs");
const server = new http.Server();
server.listen(4848, "localhost");
server.on('request',function(req,res){
    const readFile = function (err, info) {
        if (err) {
            res.status = 404;
            res.end("Page not found");
        } else
            res.end(info);
    };
    let urlParsed = url.parse(req.url, true);
    let data;
    if (req.url == "/") {
        data = fs.readFile("index.html", readFile);
    }else{
        data = fs.readFile("." + urlParsed.path, readFile);
    }
});