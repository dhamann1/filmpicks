import React, {Component} from 'react';
import MovieGrid from '../../components/MovieShow/MovieShow'
import './ProfilePage.css';
import tokenService from '../../utils/tokenService'

class ProfilePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            favoriteMovies: null
        }
    }
 
    componentDidMount(){
        console.log(this.props.user)
        fetch('/api/users/favorites', {
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + tokenService.getToken()})
        })
        .then(res => res.json())
        .then(favoriteMovies => this.setState({favoriteMovies}))
        .catch(err => console.log('err = ', err))
    }
    
    render () { 
      return (
        <div>
            <MovieGrid movies={this.state.favoriteMovies}/> 
        </div>  
      )
    }
}

export default ProfilePage; 

