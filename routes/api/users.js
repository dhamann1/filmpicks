var express = require('express');
var router = express.Router();
var User = require('../../models/User');
var usersCtrl = require('../../controllers/usersController');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);

router.post('/login', usersCtrl.login); 

router.get('/profile', usersCtrl.userProfile); 

router.post('/like', usersCtrl.like); 


/*---------- Protected Routes ----------*/
// new protected route here with checkAuth middleware function




module.exports = router;