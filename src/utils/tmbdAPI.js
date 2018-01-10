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

    fetchtopRated: function(){
        return(
            fetch('/api/movies/toprated',
            {
                method: 'get'
            })
          .then(res => res.json())
        )
    },

    fetchpopular: function(){
        return(
            fetch('/api/movies/popular',
            {
                method: 'get'
            })
          .then(res => res.json())
        )
    },

} 


export default API;  