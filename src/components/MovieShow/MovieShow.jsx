import React from 'react';
import './MovieShow.css';
import ReactLoading from 'react-loading';


const MovieShow = (props) => {
  console.log(props.movie);
  return (
    <div className="movieBox">
      {
        props.movie ?
          <div>
            <div>
              <h1>{props.movie.title}</h1>
              <span>"{props.movie.tagline}"</span>
            </div>
            <div>
              <img id="postertest" class="poster" src={`https://image.tmdb.org/t/p/w342/${props.movie.poster_path}`} alt="Movie Poster" />
            </div>
          </div>

          :
          <div>
            <ReactLoading className="loadingCircle" type="spinningBubbles" color="#4444" height='100' width='100' />
          </div>
      }
    </div >
  )
}

export default MovieShow;
