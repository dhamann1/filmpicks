import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';




const NavBar = (props) => {
  let nav = props.user ?
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/'>FilmPicks</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem>Welcome, {props.user.name}</NavItem>
        </Nav>
        <Nav>
          <LinkContainer to='/profile'><NavItem>❤ Watchlist</NavItem></LinkContainer>
        </Nav>
        <Nav>
          <NavItem onClick={props.handleLogout}>Log Out</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    :
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/'>FilmPicks</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to='/login'><NavItem>Log In</NavItem></LinkContainer>
        </Nav>
        <Nav>
          <LinkContainer to='/signup'><NavItem>Sign Up</NavItem></LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  return (
    <div>
      {nav}
    </div>
  )
}

export default NavBar;



