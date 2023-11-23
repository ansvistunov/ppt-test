var express = require("express");
var app = express();
app.use(express.static('public'));

var db = require("mysql");
var connection = db.createConnection({
    host:"localhost",
    user:"alex",
    password:"Qwerty123",
    database:"world"
});

connection.connect(function(err){
    if (err) {
        console.log(err);
        return;
    }
    console.log("connection established");
});

app.get("/country",function(req,res){
    connection.query("select * from country", function(err, rows){
        if (err){
            console.log(err);
            return;
        }
        //console.log(rows);
        res.end(JSON.stringify(rows));
    });

});

app.listen(3000);



