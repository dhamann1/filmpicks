import React, {Component} from 'react';
import MovieGrid from '../../components/MovieGrid/MovieGrid'; 
import './MainPage.css';
import {Container} from 'react-materialize';
import API from '../../utils/tmbdAPI';

class MainPage extends Component {
    constructor(props){
      super();
      this.state = {
        movies: null, 
      };
    }

    nowPlaying = () => {
      API.fetchNowPlaying()
        .then(movies => this.setState(
          {movies}
        ))
    }

    topRated = () => {
      API.fetchtopRated()
      .then(movies => this.setState(
        {movies}
      ))
    }

    popular = () => {
      API.fetchpopular()
      .then(movies => this.setState(
        {movies}
      ))
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

    handleSubmit(e){
      e.preventDefault()
      var result = this.refs.name.value.replace(/ /g, "%")
      const inputField = {
        search: this.refs.name.value
      }
      fetch('/api/movies/search', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({name: inputField.search}) 
      })
      .then(res => res.json())
      .then(movies => this.setState({movies}))
    }

    render() {
		  return (
        <div>
			    <Container> 
            <form className="form-horizontal" onSubmit={(e) => this.handleSubmit(e)} >
              <div>
                <div className="searchfield ">
                  <input className="searchbar" placeholder="Input Movie Title" ref='name'  />
                    <div className="col-sm-12 text-center">
                      <button className="btn btn-default">Search</button>&nbsp;&nbsp;
                    </div>
                  </div>
              </div>
            </form>
            <br/>
				    <div className="mainButtons"> 
				  	    <button onClick={this.nowPlaying}>Now Playing</button>&nbsp;&nbsp;
              	<button onClick={this.topRated}>Top Rated</button>&nbsp;&nbsp;
              	<button onClick={this.popular}>Popular</button>&nbsp;&nbsp;
              	<button onClick={this.upcoming}>Upcoming</button>&nbsp;&nbsp;
				    </div> 
		  	  </Container> 
          <br/> 
				    <MovieGrid movies={this.state.movies}/> 
        </div>
    )}
}

export default MainPage; 













