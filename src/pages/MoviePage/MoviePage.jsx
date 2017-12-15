import React, {Component} from 'react';
import MovieShow from '../../components/MovieShow/MovieShow'
import './MoviePage.css';

class MoviePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            movie: null
        }
    }


    
    
    componentDidMount(){
        fetch(`/api/movies/${this.props.match.params.id}`,{
            method: 'get'
        })
        .then(res => res.json())
        .then(movie => this.setState({movie}))  
    }


    favorite = (event) => {
        console.log('favorite button gets hit');
        event.preventDefault(); 
        fetch('/api/users/like',
        {
            method: 'POST',
            body: JSON.stringify({
                movieTitle: this.state.movie.title, 
                movieID: this.state.movie.id,
                image: `https://image.tmdb.org/t/p/w185/${this.state.movie.poster_path}`,
                user: this.props.user
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
          })
          .then(res => console.log('res =', res))
        }
    
    render () {
        if (this.state.movie) {
            console.log('true')
        }
      return (
        <div>
            <MovieShow movie={this.state.movie} favorite={this.favorite}/> 
        </div>  
      )
    }
}

export default MoviePage; 








