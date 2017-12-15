var moviesAPIController = require('../../controllers/api/moviesAPIController');
var express = require('express');
var router = express.Router();

router.get('/nowplaying', moviesAPIController.nowPlaying);

router.get('/toprated', moviesAPIController.topRated);

router.get('/popular', moviesAPIController.popular);

router.get('/upcoming', moviesAPIController.upcoming);

router.get('/:id', moviesAPIController.showMovie); 

router.get('/search', moviesAPIController.search);

module.exports = router;

