import React, {Component} from 'react';
import MovieGrid from '../../components/MovieGrid/MovieGrid'; 
import './MainPage.css';

class MainPage extends Component {
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


    upcoming = () => {
      fetch('/api/movies/upcoming',
      {
        method: 'get'
      })
        .then(res => res.json())
        .then(movies => this.setState({movies})) 
        .catch(err => console.log('err =', err))
    } 

    render() {
		  return (
			  <div> 
				  <div className="mainButtons"> 
					        <button onClick={this.nowPlaying}>Now Playing</button>&nbsp;&nbsp;
            		  <button onClick={this.topRated}>Top Rated</button>&nbsp;&nbsp;
            		  <button onClick={this.popular}>Popular</button>&nbsp;&nbsp;
            		  <button onClick={this.upcoming}>Upcoming</button>&nbsp;&nbsp;
				  </div> 
				  <MovieGrid movies={this.state.movies}/> 
		  	  </div> 
         )}
}

export default MainPage; 













