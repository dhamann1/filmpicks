var request = require('request-promise-native');
var tmbdKey = process.env.TMBDKEY; 

function nowPlaying (req, res) {
  request(`https://api.themoviedb.org/3/movie/now_playing?api_key=${tmbdKey}&language=en-US&include_adult=false`,function (error, tmbdResponse) {
    var tmbdBody = JSON.parse(tmbdResponse.body)
    var movies = tmbdBody.results;
    res.json(movies);
  })
}

function topRated (req, res) {
  request(`https://api.themoviedb.org/3/movie/top_rated?api_key=${tmbdKey}&language=en-US&include_adult=false`,function (error, tmbdResponse) {
    var tmbdBody = JSON.parse(tmbdResponse.body)
    var movies = tmbdBody.results;
    res.json(movies);
  })
}

function popular (req, res) {
  request(`https://api.themoviedb.org/3/movie/popular?api_key=${tmbdKey}&language=en-US&include_adult=false`,function (error, tmbdResponse) {
    var tmbdBody = JSON.parse(tmbdResponse.body)
    var movies = tmbdBody.results;
    res.json(movies);
  })
}

function upcoming (req, res) {
  request(`https://api.themoviedb.org/3/movie/upcoming?api_key=${tmbdKey}&language=en-US&include_adult=false`,function (error, tmbdResponse) {
    var tmbdBody = JSON.parse(tmbdResponse.body)
    var movies = tmbdBody.results;
    res.json(movies);
  })
}

function showMovie (req, res) {
  request(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${tmbdKey}&language=en-US&include_adult=false`,function (error, tmbdResponse) {
    var tmbdBody = JSON.parse(tmbdResponse.body);
    var movie = tmbdBody;
    res.json(movie);
  })
}


function search (req, res) {
  request(`https://api.themoviedb.org/3/search/movie?query=${req.body.name}&api_key=${tmbdKey}`, function (error, tmbdResponse) {
    var tmbdBody = JSON.parse(tmbdResponse.body);
    var movies = tmbdBody.results;
    res.json(movies);
  })
}

module.exports = {  
  nowPlaying,
  topRated,
  popular,
  showMovie,
  upcoming,
  search
}

