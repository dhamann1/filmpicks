import React from 'react';
import './MovieShow.css';
import ReactLoading from 'react-loading';


const MovieShow = (props) => {
    return (
        <div>
            {
            props.movie ?
            <div> 
                <h1>{props.movie.title}</h1> 
                <img className="picShow" src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} />
            </div>
            : 
            <div>
                <br/><br/><br/><br/><br/><br/>
                <ReactLoading className="loadingCircle" type="spinningBubbles" color="#4444" height='100' width='100'/>
            </div>
            } 
        </div>  
    )
}

export default MovieShow; 

