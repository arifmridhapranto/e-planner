import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Navigation.css';
import logo from '../../Assets/Images/E-Planner.png';

const Navigation = () => {
  return (
    <>
          <Navbar collapseOnSelect expand='lg' style={ {background: 'transparent'}}>
        <Container>
          <Navbar.Brand><Link to='/'><img src={logo} alt="" /> </Link></Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto'>
      <Link className='nav-item' to='/'>
                Home
              </Link>
              <Link className='nav-item' to='/about'>
                About
              </Link>
              <Link className='nav-item' to='/contact'>
                Contact
              </Link>
              <Link className='nav-item' to='/events'>
                Events
              </Link>
              <Link className='nav-item' to='/blog'>
                Blogs
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation