import React from 'react';
import './MainPage.css';
import NavBar from '../../components/NavBar/NavBar';
// import MovieGrid from '../../components/MovieGrid/MovieGrid'


const MainPage = (props) => {
    return (
        <div>
        <NavBar user={props.user} handleLogout={props.handleLogout} />
        <p> Hello </p> 
        </div>
    )
}

export default MainPage; 