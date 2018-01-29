import React, { Component } from 'react';
import MovieGrid from '../../components/MovieGrid/MovieGrid';
import './MainPage.css';
import { FormControl, Button } from 'react-bootstrap';

import API from '../../utils/tmbdAPI';

class MainPage extends Component {
  constructor(props) {
    super();
    this.state = {
      movies: null,
    };
  }
  nowPlaying = () => {
    API.fetchNowPlaying()
      .then(movies => this.setState(
        { movies }
      ))
  }

  topRated = () => {
    API.fetchTopRated()
      .then(movies => this.setState(
        { movies }
      ))
  }

  popular = () => {
    API.fetchPopular()
      .then(movies => this.setState(
        { movies }
      ))
  }

  upcoming = () => {
    API.fetchUpcoming()
      .then(movies => this.setState(
        { movies }
      ))
  }

  handleSubmit(e) {
    e.preventDefault()
    var result = this.input.value.trim().replace(/ /g, "%20")
    const inputField = {
      search: result
    }
    fetch('/api/movies/search', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ name: inputField.search })
    })
      .then(res => res.json())
      .then(movies => this.setState({ movies }))
  }




  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <FormControl
            id="formControlsText"
            type="text"
            placeholder="Search Movie (e.g. 'Star Wars')"
            inputRef={(ref) => { this.input = ref }} />
          <Button type="submit">Submit</Button>
        </form>
        <br />
        <div className="mainButtons">
          <button onClick={this.nowPlaying}>Now Playing</button>&nbsp;&nbsp;
          <button onClick={this.topRated}>Top Rated</button>&nbsp;&nbsp;
          <button onClick={this.popular}>Popular</button>&nbsp;&nbsp;
          <button onClick={this.upcoming}>Upcoming</button>&nbsp;&nbsp;
			  </div>
        <br />
        <MovieGrid movies={this.state.movies} />
      </div>
    )
  }
}

export default MainPage;













