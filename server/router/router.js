var router = require('express').Router();
var controllers = require('../controllers/controllers.js');

router.get('/api/colleges', controllers.colleges.get);

router.post('/signup', controllers.signup.get);

router.post('/login', function(request, response) {
  console.log('login', request.session);
});

router.post('/api/colleges/suggestions', controllers.colleges.getSuggestions);

module.exports = router;