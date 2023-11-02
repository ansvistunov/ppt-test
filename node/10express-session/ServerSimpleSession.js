const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const SessionStore = require('express-mysql-session');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cookieParser());

const options = {
    host: 'localhost',
    user: 'alex',
    password: 'Qwerty123',
    database: 'world'
};


app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: new SessionStore(options),
    resave: true,
    saveUninitialized: true
}))

app.get('/', function(req, res, next) {
    req.session.number = req.session.number + 1 || 1;
    console.log(req.session.number)
    res.end("You read this page "+req.session.number.toString()+" times");
    next();
})

app.listen(3000);