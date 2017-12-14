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

    render () {
        console.log('this.state', this.state)
        if (this.state.movie) {
            console.log('true')
        }
      return (
        <div>
            <MovieShow movie={this.state.movie}/> 
        </div>  
      )
    }
}

export default MoviePage; 








