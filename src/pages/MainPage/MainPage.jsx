import React, {Component} from 'react';
import {
	Link,
} from 'react-router-dom'
import './MainPage.css';
import NavBar from '../../components/NavBar/NavBar';
import MovieGrid from '../../components/MovieGrid/MovieGrid'; 


const MainPage = (props) => {
	return (
			<div>
				<NavBar 
						user={props.user} 
						handleLogout={props.handleLogout} 
				/>
				<MovieGrid /> 
			</div>
	)}

export default MainPage; 