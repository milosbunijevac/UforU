var router = require('express').Router();
var controllers = require('../controllers/controllers.js');
var sessions = require('../sessions');

router.get('/api/colleges', controllers.colleges.get);

router.post('/signup', function() {
  console.log('server got the route for signup');
});

router.post('/login', function(request, response) {
  console.log('login', request.session); 
});

router.post('/api/colleges/suggestions', controllers.colleges.getSuggestions);

module.exports = router;