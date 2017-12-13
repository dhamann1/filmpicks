import React, {Component}from 'react';
import './MainPage.css';
import NavBar from '../../components/NavBar/NavBar';
import MovieGrid from '../../components/MovieGrid/MovieGrid'

class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies: []
        }
    }
    componentDidMount(){
        fetch('/api/movies',
        {
          method: 'get'
        })
          .then(res => res.json())
          .then(movies => this.setState({movies})) 
    }

    render() {
        return (
            <div>
                <NavBar 
                 user={this.props.user} 
                 handleLogout={this.props.handleLogout} 
                />
                <br/>
                <br/>
                <br/>
                <MovieGrid movies={this.state.movies}/> 
            </div>
        )
    }
}

export default MainPage; 