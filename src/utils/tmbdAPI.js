const API = {
    fetchNowPlaying: function(){
        return(
            fetch('/api/movies/nowplaying',
            {
                method: 'get'
            })
          .then(res => res.json())
        )
    }
} 


export default API;  