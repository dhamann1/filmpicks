import React, {Component} from 'react';
import './ProfilePage.css';
import ProfileGrid from '../../components/MovieGrid/MovieGrid'



class ProfilePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies: null, 
            favoriteMovies: null
        }
    }
 
    componentDidMount(){
        fetch('/api/movies/toprated',
            {
              method: 'get'
            })
              .then(res => res.json())
              .then(movies => this.setState({movies})) 
        } 
    
    render () { 
      return (
        <div>
        <ProfileGrid movies={this.state.movies} />  
        </div>  
      )
    }      
}

export default ProfilePage; 

