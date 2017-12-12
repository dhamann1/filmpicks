var moviesAPIController = require('../../controllers/api/moviesAPIController');
var express = require('express');
var router = express.Router();

router.get('/', moviesAPIController.findAllMovies);

module.exports = router;

