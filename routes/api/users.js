var express = require('express');
var router = express.Router();
var User = require('../../models/user');
var usersCtrl = require('../../controllers/usersController');


router.get('/favorites', usersCtrl.findFavorites)

router.post('/signup', usersCtrl.signup);

router.post('/login', usersCtrl.login); 

router.post('/like', usersCtrl.like); 

// router.post('/delete', usersCtrl.deleteMovie); 



module.exports = router;