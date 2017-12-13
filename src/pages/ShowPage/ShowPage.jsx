import React, { Component } from 'react';
import './ShowPage.css';
import NavBar from '../../components/NavBar/NavBar';


class ShowPage extends Component {
    constructor(props){
        super();
        this.state = {
            movies: []
        }
    }

componentDidMount(){
    fetch('/api/movies',
    {
      method: 'post'
    })
      .then(res => res.json())
      .then(movie => this.setState({movie}))  
  }

  render () {
      return (
        <div>
            {this.state.movies.title}
        </div> 
        
      )
  }


}



export default ShowPage; 