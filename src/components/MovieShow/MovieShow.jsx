import React from 'react';
import './MovieShow.css';
import ReactLoading from 'react-loading';
import {Grid, Col} from 'react-bootstrap';


const MovieShow = (props) => {
  console.log(props.movie);
  return (
    <div className="movieBox">
      {
        props.movie ?
        <Grid> 
        <Col xs={12}> 
         <Col xs={12} md={8} mdPush={5} lg={7} lgPush={5}> 
             <h1>{props.movie.title}</h1>
             <span>"{props.movie.tagline}"</span>
             <p>{props.movie.overview}</p>
             <div className="row nopadding release-details">
               <Col xs={6}> Original Release: <span className="meta-data">{props.movie.release_date}</span></Col>
               <Col xs={6}> Running Time: <span className="meta-data">{props.movie.runtime} mins</span> </Col>
               <Col xs={6}> Box Office: <span className="meta-data">{props.movie.revenue}</span></Col>
               <Col xs={6}> Vote Average: <span className="meta-data">{props.movie.vote}</span></Col>
             </div>
         </Col>
         <Col xs={12} md={4} mdPull={8} lg={5} lgPull={7}> 
           <img id="postertest" className="poster" src={`https://image.tmdb.org/t/p/w342/${props.movie.poster_path}`} alt="Movie Poster" />
         </Col>
       </Col> 
       </Grid> 
          :
          <div>
            <ReactLoading className="loadingCircle" type="spinningBubbles" color="#4444" height='100' width='100' />
          </div>
      }
    </div >
  )
}

export default MovieShow;


