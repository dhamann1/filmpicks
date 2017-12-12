var request = require('request-promise-native');
var tmbdKey = process.env.TMBDKEY; 


function findAllMovies (req, res) {
  request(`https://api.themoviedb.org/3/movie/top_rated?api_key=${tmbdKey}&language=en-US`,function (error, tmbdResponse) {
    var tmbdBody = JSON.parse(tmbdResponse.body)
    var movies = tmbdBody.results;
    res.json(movies);
  })
}


module.exports = {
  findAllMovies 
}



// Comment.find({movieId: id}, (error, comments) => {
//   response.comments = comments;
//   res.json(response);
// })
// res.json(response);