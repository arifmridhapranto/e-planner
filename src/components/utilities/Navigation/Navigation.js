import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import ePlanner from '../../../Assets/images/E-Planner.png';

export const Navigation = () => {
    const navLink = {
      color: "black",
      textDecoration: "none",
      padding: "10px",
      fontFamily: "Arial",
    };
  return (
    <>
      <Navbar bg='light' variant='dark'>
        <Container>
          <Link to='/'>
            <img src={ePlanner} alt='' />
          </Link>
          <Nav className='ms-auto'>
            <Link style={navLink} to='/about'>
              About
            </Link>
            <Link style={navLink} to='/'>
              Home
            </Link>
            <Link style={navLink} to='/contact'>
              Contact
            </Link>
            <Link style={navLink} to='/blog'>
              Blog
            </Link>
            <Link style={navLink} to='/events'>
              Events
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
;
};



