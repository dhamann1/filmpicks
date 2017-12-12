var request = require('request-promise-native');
var tmbdKey = process.env.TMBDKEY; 


function findAllMovies (req, res) {
  request(`https://api.themoviedb.org/3/movie/top_rated?api_key=${tmbdKey}&language=en-US`,function (error, tmbdResponse) {
    // console.log('error:', error);
    // console.log('tmbdResponse' , tmbdResponse); 
    var tmbdBody = JSON.parse(tmbdResponse.body)
    var response = {movies: tmbdBody.results};
    console.log(tmbdBody.results[0].id);
    res.json(response);

  })
}


module.exports = {
  findAllMovies 
}



// Comment.find({movieId: id}, (error, comments) {
//   response.comments = comments
//   res.json(response)
// })
// res.json(response);