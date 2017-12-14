import React from 'react';
import './MovieShow.css';

const MovieShow = (props) => {
    return (
        <div>
            {props.movie ?
            <div> 
            <h1>{props.movie.title}</h1> 
            <img className="picShow" src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} />
            </div>
            : <h2>Loading</h2>} 
        </div>  
    )
}

export default MovieShow; 

