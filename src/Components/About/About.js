import React from 'react'
import './About.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from 'react-bootstrap';
import Buttons from '../Buttons/Buttons';
import about1 from '../../Assets/Images/about1.jpg';
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <>
      <Container fluid='md' className='py-5'>
        <Row>
          <Col
            md={5}
            sm={12}
            className='text-sm-center mb-5 d-flex justify-content-center align-items-center'>
            <Image src={about1} fluid />
          </Col>
          <Col
            md={7}
            sm={12}
            className='d-flex justify-content-center align-items-center'>
            <Container>
              <h2 className='section-heading'>
                Welcome to <span style={{ color: "#FE3F01" }}>E-Planner</span>
              </h2>
              <h4 section='sub-heading'>
                Making your events smarter & impactful by personalised event
                management.
              </h4>
              <p className='sectionPera'>
                Consectetur elit sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqul enim ad minim veniam quis rud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidata non proident sunt in qui officia deserunt mol lit anim
                id est laborum tempore. Laboris volputate quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat duis autea dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <Link to='/about'>
                <Buttons text='Read More' />
              </Link>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About