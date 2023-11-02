const http = require("http");
const url = require("url");
const fs = require("fs");
const formidable  =  require('formidable');
const server = new http.Server();
server.listen(4848, "localhost");
server.on('request', async function (req, res) {
    let urlParsed = url.parse(req.url, true);
    let data;
    if (req.method === "GET") {
        if (req.url == "/") {
            data = fs.readFileSync("index.html");
            res.end(data);
        } else {
            try {
                data = fs.readFileSync("." + urlParsed.path);
                res.end(data);
            } catch (error) {
                res.status = 404;
                res.end("Page not found");
            }
        }
    } else if (req.method === "POST") {
        const form = new formidable.Formidable({ multiples: true });
            let fields;
            let files;
            [fields, files] = await form.parse(req);
            fs.rename(files['fileToUpload'][0].filepath, './upload/'+files['fileToUpload'][0].originalFilename, (err)=>{
                if (err) console.log(`renamed. error is ${err}`);
            })
            res.end("Success upload")
    }
});