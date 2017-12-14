import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom';
import './MovieGrid.css';


class MovieGrid extends Component {
    constructor(props){
      super();
      this.state = {
        movies: null, 
      };
    }


    nowPlaying = () => {
        fetch('/api/movies/nowplaying',
        {
          method: 'get'
        })
          .then(res => res.json())
          .then(movies => this.setState({movies})) 
    }

    topRated = () => {
        fetch('/api/movies/toprated',
        {
          method: 'get'
        })
          .then(res => res.json())
          .then(movies => this.setState({movies})) 
    }

    popular = () => {
        fetch('/api/movies/popular',
        {
          method: 'get'
        })
          .then(res => res.json())
          .then(movies => this.setState({movies})) 
    }



//Function NowPlaying (Fetch NowPlaying)

    render() {
        return (
            <div>

            <button onClick={this.nowPlaying}>Now Playing</button>
            <button onClick={this.topRated}>Top Rated</button>
            <button onClick={this.popular}>Popular</button>

            <div className="container">
                <div className="row">
                
                {this.state.movies ?
                this.state.movies.map((movie, idx) => 
                <div className="col l4" key={idx}><img className="moviePic" src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} /> <br/>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link><br/></div>)
                :
                <h2>Loading</h2>}  
            </div>
            </div>
            </div>
    
        )}
}

export default MovieGrid; 