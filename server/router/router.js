var router = require('express').Router();
var controllers = require('../controllers/controllers.js');

router.get('/api/colleges', controllers.colleges.get);

router.get('/api/colleges/suggestions', controllers.colleges.getSuggestions);

module.exports = router;