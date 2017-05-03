var router = require('express').Router();
var controllers = require('./controllers/controllers.js');

router.get('/api/colleges', controller.colleges.get);

router.get('/api/colleges/suggestions', controller.colleges.getSuggestions);