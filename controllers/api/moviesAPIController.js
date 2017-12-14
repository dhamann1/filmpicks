var request = require('request-promise-native');
var tmbdKey = process.env.TMBDKEY; 


function nowPlaying (req, res) {
  request(`https://api.themoviedb.org/3/movie/now_playing?api_key=${tmbdKey}&language=en-US`,function (error, tmbdResponse) {
    var tmbdBody = JSON.parse(tmbdResponse.body)
    var movies = tmbdBody.results;
    res.json(movies);
  })
}

function topRated (req, res) {
  request(`https://api.themoviedb.org/3/movie/top_rated?api_key=${tmbdKey}&language=en-US&`,function (error, tmbdResponse) {
    var tmbdBody = JSON.parse(tmbdResponse.body)
    var movies = tmbdBody.results;
    res.json(movies);
  })
}

function popular (req, res) {
  request(`https://api.themoviedb.org/3/movie/popular?api_key=${tmbdKey}&language=en-US&page=1`,function (error, tmbdResponse) {
    var tmbdBody = JSON.parse(tmbdResponse.body)
    var movies = tmbdBody.results;
    res.json(movies);
  })
}

function showMovie (req, res) {
  request(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${tmbdKey}&language=en-US`,function (error, tmbdResponse) {
    var tmbdBody = JSON.parse(tmbdResponse.body);
    var movie = tmbdBody;
    console.log(movie);
    res.json(movie);
  })
}


module.exports = {
  nowPlaying,
  topRated,
  popular,
  showMovie
}



// Movie.find({movieId: id}, (error, comments) => {
//   response.comments = comments;
//   res.json(response);
// })
// res.json(response);