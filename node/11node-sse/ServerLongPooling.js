const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

let clients = [];


app.post('/publish', function(req, res) {
    console.log("get request for publlish "+ req.body.message);
    //console.log(req);
    for (let i=0; i<clients.length;i++){
        clients[i].end(req.body.message);
    }
    clients = [];
    res.end();

})

app.get('/messages', function(req, res) {
    console.log("get request for messages...");
    clients.push(res);
})

app.listen(3000);