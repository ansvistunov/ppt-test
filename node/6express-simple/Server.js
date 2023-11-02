const express = require("express");
const app = express();


app.use(express.static('public'));

app.get("/",function(req,res){
    res.send("Hello world");

});
app.all("/a*a", function(req,res){
    res.send("hello from a");
})

errorHandler = function(req,res){res.send("error");}

app.get("/error", function(req,res, next) {
    if (1) next();

}, errorHandler);


var data='<?xml version="1.0"?>' +
    '<ROWS>' +
    '<ROW><COL1>Страна</COL1> <COL2>Столица</COL2></ROW>' +
    '<ROW><COL1>Россия</COL1> <COL2>Москва</COL2></ROW>' +
    '<ROW><COL1>Франция</COL1> <COL2>Париж</COL2></ROW>' +
    '</ROWS>';

app.get("/service", function(req,res){
    //console.log("/service called");
    res.header('Content-Type','text/xml');
    res.end(data);
} );

app.listen(3000);