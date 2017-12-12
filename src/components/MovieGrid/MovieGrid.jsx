import React from 'react';
import './MovieGrid.css';

const MovieGrid = (props) => {
    return (
    <div>
        {props.movies ?
        props.movies.map((movie, idx) => <li key={idx}><img src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`} />
        {movie.title}&nbsp;&nbsp;{movie.vote_average}</li>)
        :
        <h2>LOADING</h2>}    
    </div>
    ); 
}

export default MovieGrid; 
