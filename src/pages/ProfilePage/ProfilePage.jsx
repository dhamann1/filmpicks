import React, { Component } from 'react';
import './ProfilePage.css';
import MovieGrid from '../../components/MovieGrid/MovieGrid'
import tokenService from '../../utils/tokenService'



class ProfilePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: null,
			favoriteMovies: null
		}
	}

	componentDidMount() {
		fetch('/api/users/favorites', {
			headers: new Headers({
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + tokenService.getToken()
			})
		})
			.then(res => res.json())
			.then(favoriteMovies => this.setState({ favoriteMovies }))
			.catch(err => console.log('err = ', err))
	}


	render() {
		return (
			<div>
				<h1 className="wTitle"> Watchlist </h1>
				<MovieGrid movies={this.state.favoriteMovies} />
			</div>
		)
	}
}

export default ProfilePage;

