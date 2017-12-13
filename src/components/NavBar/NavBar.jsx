import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
  <div>
    <span className='NavBar-welcome'>Welcome, {props.user.name}</span>
    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <Link to='' className='NavBar-link' onClick={props.handleLogout}>Log Out</Link>
  </div>
  :
  <div>
    <Link to='/login' className='NavBar-link'>Log In</Link>
    &nbsp;&nbsp;|&nbsp;&nbsp;
    <Link to='/signup' className='NavBar-link'>Sign Up</Link>
  </div>;
  return (
    <div className='nav-wrapper blue darken-4'>
      {nav}
    </div>
  );
};

export default NavBar;



