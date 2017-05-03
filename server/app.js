var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var router = require('./router/router.js');

var app = express();
var IP = process.env.IP || 'localhost';
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));
app.use(router);

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

module.exports.app = app;