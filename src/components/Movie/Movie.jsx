import React, {Component} from 'react';

class Movie extends Component {
    constructor(props){
        super(props);
        this.state = {
            movie: null
        }
    }

    componentDidMount(){
        fetch(`/api/movies/${this.props.movie}`,{
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
            hello
            {this.state.movie ?  <div>loaded {this.state.movie.title}</div> : <h2>Loading</h2>} 
        </div>  
      )
    }
}

export default Movie; 