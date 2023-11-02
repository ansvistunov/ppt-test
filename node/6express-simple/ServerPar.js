var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get("/city/:countrycode",function(req,res){
    console.log(req.params.countrycode);
});
app.listen(3000);