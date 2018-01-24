import React from 'react';
import {Link} from 'react-router-dom';
import './MovieGrid.css';
import {Container} from 'react-materialize';

const MovieGrid = (props) => (
    <Container>
      <div className="row">           
        {
          props.movies ? props.movies.map((movie, idx) => 
            <div className="col l6" key={idx}>
              <img className="moviePic" src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="Movie Poster"/> 
              <br/>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link><br/></div>)
              :
              <div>
               <br/>
              <img src='https://i.imgur.com/ixnlPvF.png' alt="tmdb" className="filmPic"/>
              </div>
        }
      </div>
    </Container>

)

export default MovieGrid; 




