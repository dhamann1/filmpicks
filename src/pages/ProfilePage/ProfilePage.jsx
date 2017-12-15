import React, {Component} from 'react';
import MovieGrid from '../../components/MovieShow/MovieShow'
import './ProfilePage.css';
import tokenService from '../../utils/tokenService'

class ProfilePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            favorites: null
        }
    }
 
    componentDidMount(){
        fetch('/api/users/favorites', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + tokenService.getToken()
            },
        })
        .then(res => res.json())
        .then(favorites => this.setState({favorites}))
        .catch(err => console.log('err = ', err))
    }
    
    render () { 
      console.log(this.state.favorites)  
      return (
        <div>
            <MovieGrid movies={this.state.favorites}/> 
        </div>  
      )
    }
}

export default ProfilePage; 

