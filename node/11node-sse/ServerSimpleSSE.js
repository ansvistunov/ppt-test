const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get("/sse", (req, res) => {
    res.set("Content-Type","text/event-stream")
    res.set("Connection","keep-alive");
    res.set("Cache-Control","no-cache");
    res.set("Access-Control-Allow-Origin","*");
    console.log("client connected");

    let id = 0;
    let timer = setInterval(() => {
        res.status(200);
        let value = Math.random() * 100;
        let data = 'id:' + (id++) + '\n' + 'data: ' + value + '\n\n';
        res.write(data); // НЕ send!!!
        console.log("data send: " + data);
    }, 1000);

    req.on('close', () =>{
        console.log("close connection" );
        clearInterval(timer);
    })
})

app.listen(3000);