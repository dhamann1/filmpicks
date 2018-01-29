import React from 'react';
import { Link } from 'react-router-dom';
import './MovieGrid.css';
import { Grid, Row, Col } from 'react-bootstrap'

const MovieGrid = (props) => (
  <Grid>
    <Row>
      {
        props.movies ? props.movies.map((movie, idx) =>
          <Col md={6} key={idx} id="movieSpot">
            <img className="moviePic" src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="Movie Poster" />
            <br />
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link><br /></Col>)
          :
          <div>
          </div>
      }
    </Row>
  </Grid>

)

export default MovieGrid;




