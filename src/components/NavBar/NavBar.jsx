import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize'
import './NavBar.css';

const NavBar = (props) => {
  var img = <img className="navIcon" src="https://i.imgur.com/nbf8nWS.png" alt="FilmPicks"/>
  let nav = props.user ?
    <div>
        <Navbar brand={img} className='red lighten-1' right>
        <NavItem><Link to='/profile'>Welcome, {props.user.name}</Link></NavItem>
        <NavItem><Link to='/profile'>♥ Favorites </Link></NavItem> 
        <NavItem onClick={props.handleLogout}>Log Out</NavItem>
      </Navbar>
    </div>
  :
    <div>
        <Navbar brand={img} className='red lighten-1' right>
        <NavItem><Link to='/login'>Log In </Link></NavItem>
        <NavItem><Link to='/signup'>Sign Up</Link></NavItem>
      </Navbar>
    </div>
    return (
      <div>
          {nav}
      </div>    
    ) 
}

export default NavBar;



