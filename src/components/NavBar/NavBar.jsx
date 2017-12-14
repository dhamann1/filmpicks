import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize'
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Navbar brand='logo' right> 
        <NavItem href='/user/profile'> Welcome, {props.user.name} </NavItem>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <NavItem href='' onClick={props.handleLogout}>Log Out</NavItem>
      </Navbar>
    </div>
  :
    <div>
      <NavItem href='login'> Log In</NavItem>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <NavItem href='/signup'>Sign Up</NavItem>
    </div>;
    return (
      <div>
          {nav}
      </div>    
    ) 
}

export default NavBar;



