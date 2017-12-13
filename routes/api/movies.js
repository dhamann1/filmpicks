var moviesAPIController = require('../../controllers/api/moviesAPIController');
var express = require('express');
var router = express.Router();

router.get('/', moviesAPIController.nowPlaying);

router.post('/:id', moviesAPIController.showMovie); 

module.exports = router;

