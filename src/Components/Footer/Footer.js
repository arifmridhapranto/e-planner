import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";
import logo from '../../Assets/Images/E-Planner.png';
import location from '../../Assets/Images/location-dot-solid.svg';
import phone from '../../Assets/Images/phone-solid.svg';
import email from '../../Assets/Images/envelope-solid.svg';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Col sm={12} md={4}>
            <Image src={logo} />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
              perferendis delectus officia deleniti animi nostrum voluptate, id
              voluptates corporis iusto, non necessitatibus a in.
            </p>
          </Col>
          <Col sm={12} md={4}>
            <h2>Keep In Touch</h2>
            <div className='d-flex align-align-items-center  gap-1 my-2'>
              <div className='icon'>
                <img src={location} alt='' height='16px' width='16px' />
              </div>
              <div className='text'>
                <h6>38-2 Hilton Street, California, USA</h6>
              </div>
            </div>
            <div className='d-flex align-align-items-center  gap-1 my-2'>
              <div className='icon'>
                <img src={phone} alt='' height='16px' width='16px' />
              </div>
              <div className='text'>
                <h6>+01621461188</h6>
              </div>
            </div>
            <div className='d-flex align-align-items-center gap-1 my-2'>
              <div className='icon'>
                <img src={email} alt='' height='16px' width='16px' />
              </div>
              <div className='text'>
                <h6>mridhapranto999@gmail.com</h6>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <h2>Quick Links</h2>
            <ul className='menu-list'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>

              <li>
                <Link to='/contact'>Contact</Link>
              </li>

              <li>
                <Link to='/events'>Events</Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col sm={12} style={{ color: "#FE3E01" }}>
            <p>Copyright &copy; reserved by Pranto Mridha</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer