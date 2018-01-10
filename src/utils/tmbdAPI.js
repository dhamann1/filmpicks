const API = {
    fetchNowPlaying: function(){
        return(
            fetch('/api/movies/nowplaying',
            {
                method: 'get'
            })
          .then(res => res.json())
        )
    },

    fetchTopRated: function(){
        return(
            fetch('/api/movies/toprated',
            {
                method: 'get'
            })
          .then(res => res.json())
        )
    },

    fetchPopular: function(){
        return(
            fetch('/api/movies/popular',
            {
                method: 'get'
            })
          .then(res => res.json())
        )
    },

    fetchUpcoming: function(){
        return(
            fetch('/api/movies/upcoming',
            {
                method: 'get'
            })
          .then(res => res.json())
        )
    },

} 


export default API;  