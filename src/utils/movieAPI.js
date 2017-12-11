function searchMovies(title){
    fetch(`https://developer.nytimes.com/proxy/https/api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=62f8df6a646e4a2a8068b3a25eb9d1cb&query=${title}`,
    {
      method: 'get'
    })
    .then(response => response.json())
    .then(movies => movies)
    .catch((error) => {
      console.log(error)
      console.error(error)
    })
  }
 

module.exports = {
    searchMovies 
}