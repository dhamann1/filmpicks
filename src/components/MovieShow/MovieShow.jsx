import React from 'react';
import './MovieShow.css';
import ReactLoading from 'react-loading';
import {Grid, Col, Row, Button} from 'react-bootstrap';


const MovieShow = (props) => {
  let userWatch = props.user ? <Button onClick={props.favorite}>Add to Watchlist</Button> : "";  
  return (
    <div>
      {
        props.movie ?
        <Grid className="movieBox"> 
        <Col xs={12}> 
         <Col className="movieDetails" xs={12} md={8} mdPush={4} lg={7} lgPush={5}> 
             <h1>{props.movie.title}</h1>
             <span className="tagline">{props.movie.tagline}</span>
             <p>{props.movie.overview}</p>
             <Row>
               <Col xs={6}> Original Release: <span className="meta-data">{props.movie.release_date}</span></Col>
               <Col xs={6}> Running Time: <span className="meta-data">{props.movie.runtime} mins</span> </Col>
               <Col xs={6}> Box Office: <span className="meta-data">{props.movie.revenue}</span></Col>
               <Col xs={6}> Vote Average: <span className="meta-data">{props.movie.vote_average}</span></Col>
               <br /> 
               {userWatch}
             </Row>
         </Col>
         <Col xs={12} md={4} mdPull={8} lg={5} lgPull={7}> 
           <img className="poster" src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`} alt="Movie Poster" />
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


