import React from 'react';
import './MovieGrid.css';
import { Link } from 'react-router-dom';


const MovieGrid = (props) => {
    return (
    <div className='container'>
    <div className="row">
        {props.movies ?
        props.movies.map((movie, idx) => 
        <div className="col s12 m5" key={idx}><img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} /> <br/>
        <Link to={`/movies/${movie.id}`}>{movie.title}</Link></div>)
        :
        <h2>Loading</h2>} 
    </div>
    </div>
    ); 
}

export default MovieGrid; 


