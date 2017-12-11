import React from 'react';
import './MainPage.css';
import NavBar from '../../components/NavBar/NavBar';


const MainPage = (props) => {
    return (
        <NavBar user={props.user} handleLogout={props.handleLogout} />
    )
}

export default MainPage; 