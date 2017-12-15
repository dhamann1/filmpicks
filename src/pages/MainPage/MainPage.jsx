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

    handleSubmit(e) {
      e.preventDefault()
      const formData = {
        search: this.refs.name.value
      }
      console.log(formData.search);
      fetch('specified route', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({name: formData.search})
      })
      .then (res => res.json())
      .then(movies => this.setState({movies}))  
      console.log(this.state.movies)
    }





    render() {
		  return (
			  <div> 
          <form className="form-horizontal" onSubmit={(e) => this.handleSubmit(e)} >
        <div className="form-group">
        <div className="col-sm-12">
          <input type="name" className="form-control" placeholder="name" value={this.state.name} onChange={(e) => this.handleChange('name', e)} />
          <div className="col-sm-12 text-center">
              <button className="btn btn-default">Search</button>&nbsp;&nbsp;
            </div>
        </div>
        </div>
      </form>
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













