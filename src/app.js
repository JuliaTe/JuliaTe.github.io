var express = require('express');
var app = express();
var path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(process.env.PORT || 8000, function () {
    console.log('Server is up on port 8000');
});