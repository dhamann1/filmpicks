import React from 'react';
import './MovieShow.css';
import ReactLoading from 'react-loading';
import {Button, Modal} from 'react-materialize';


const MovieShow = (props) => {
    console.log(props.movie);
    return (
        <div className="movieBox"> 
            {
                props.movie ?
                <div className="container center-align black-box position-abs"> 
                    <h4>{props.movie.title}</h4>
                    <h5>"{props.movie.tagline}"</h5> 
                    <div>Score of {props.movie.vote_average} out of {props.movie.vote_count} Reviews </div><br/> 
                    <div> Released on: {props.movie.release_date}</div> 
                    <img className="picShow" src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt='Movie Poster'/><br/>
                    <Modal header='Modal Header'trigger={<Button>Overview</Button>}> <p>{props.movie.overview}</p></Modal>
                    <br/><br/> 
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



