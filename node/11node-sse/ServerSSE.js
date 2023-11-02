const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

const EE = require("events").EventEmitter;
const messageEmitter = new EE();

app.get("/messages", (req, res) => {
    res.set("Content-Type","text/event-stream")
    res.set("Connection","keep-alive");
    res.set("Cache-Control","no-cache");
    res.set("Access-Control-Allow-Origin","*");
    console.log("client conected");

    let id = 0;
    const callback = function(message){
        res.status(200);
        let data = 'id:'+(id++)+'\n'+'data: '+message.data+'\n\n';
        res.write(data); // НЕ send!!!
        console.log("data send: "+data);
    }

    messageEmitter.on('newmessage', callback);//<--устанавливаем обработчик для вновь пришедшего сообщения

    req.on('close', () =>{
        console.log("close connection" );
        messageEmitter.off('newmessage', callback);//при закрытии соединения - убираем обработчик
    })
})

app.post("/publish", (req, res) =>{
    console.log("get request for publlish "+ req.body.message);
    messageEmitter.emit('newmessage',{data: req.body.message});
    res.end();
})

app.listen(3000);