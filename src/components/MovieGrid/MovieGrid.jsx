import React from 'react';
import {Link} from 'react-router-dom';
import './MovieGrid.css';

const MovieGrid = (props) => (
  <div>
    <div className="container">
      <div className="row">           
        {props.movies ? props.movies.map((movie, idx) => 
          <div className="col l3" key={idx}>
            <img className="moviePic" src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} /> <br/>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link><br/></div>)
            :
            <h2>Loading</h2>}  
          </div>
    </div>
  </div> 
)

export default MovieGrid; 