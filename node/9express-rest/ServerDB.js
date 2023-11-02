
var express = require("express");
var app = express();
var connection = require("./db");

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

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

app.get("/city/:countrycode",function(req,res){
    console.log(req.params.countrycode);
    connection.query("select * from city where countryCode=?", req.params.countrycode, function(err, rows){
        if (err){
            console.log(err);
            return;
        }
        //console.log(rows);
        res.end(JSON.stringify(rows));
    });

});

app.put("/city", function(req,res){
    console.log("PUT /city called");
    console.log(req.body);
    connection.query("update city set name=?, CountryCode=?, District=?, Population=? where id=?", [req.body.Name, req.body.CountryCode, req.body.District, req.body.Population, req.body.ID], function(err, rows){
        if (err){
            console.log(err);
            return;
        }
        //console.log(rows);
        //res.end(JSON.stringify(rows));
    });
});

app.listen(3000);