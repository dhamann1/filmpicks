var moviesAPIController = require('../../controllers/api/moviesAPIController');
var express = require('express');
var router = express.Router();

router.get('/nowplaying', moviesAPIController.nowPlaying);

router.get('/toprated', moviesAPIController.topRated);

router.get('/popular', moviesAPIController.popular);

router.get('/:id', moviesAPIController.showMovie); 

module.exports = router;

