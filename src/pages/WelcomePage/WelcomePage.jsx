import React, {Component} from 'react';
import './WelcomePage.css';
import {Link} from 'react-router-dom';

class WelcomePage extends Component {
    constructor(props){
      super(props);
      this.state = {
          user: null, 
      };
    }
    render() {
		  return (
             
            <div className="welcomeBox"> 
                <div className="container"> 
                <h1> Welcome to FilmPicks </h1> <br/>  
                <Link to="/movies">Movie Search</Link> 
                </div> 
            </div>
  
         )
    }
}

export default WelcomePage; 









