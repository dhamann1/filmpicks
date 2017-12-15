import React from 'react';
import ReactLoading from 'react-loading';
import {Link} from 'react-router-dom';
import './ProfileGrid.css';

const ProfileGrid = (props) => (
  <div>
    <div className="container">
      <div className="row">           
        {
          props.movies ? props.movies.map((movie, idx) => 
            <div className="col l3" key={idx}>
              <img className="moviePic" src={`${movie.image}`} alt="Movie Poster"/> 
              <br/>
              <Link to={`/movies/${movie.movieID}`}>{movie.movieTitle}</Link><br/></div>)
              :
              <div>
              <br/><br/><br/><br/><br/><br/>
              <ReactLoading className="loadingCircle" type="spinningBubbles" color="#4444" height='100' width='100'/>
              </div>
        }
      </div>
    </div>
  </div>
)

export default ProfileGrid; 
