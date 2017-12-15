import React from 'react';
import './MovieShow.css';
import ReactLoading from 'react-loading';
import {Button} from 'react-materialize';


const MovieShow = (props) => {
    return (
        <div>
            {
            props.movie ?
            <div> 
                <h4>{props.movie.title}</h4><br/> 
                <img className="picShow" src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt='Movie Poster'/><br/>
                <Button className="waves-effect waves-light btn"onClick={props.favorite}>Add Favorite </Button>

                
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

