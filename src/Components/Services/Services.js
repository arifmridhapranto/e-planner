import React from 'react'
import {  Col, Container, Image, Row } from 'react-bootstrap';
import './Services.css';
import service1 from '../../Assets/Images/birthday-cake.png'
import service2 from '../../Assets/Images/music.png'
import service3 from '../../Assets/Images/wedding.png'

const Services = () => {


    const services = [
      {
        id: 1,
        icon: service1,
        title: "Birthday",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        id: 2,
        icon: service3,
        title: "Wedding",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        id: 3,
        icon: service2,
        title: "Office-party",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        id: 4,
        icon: service1,
        title: "Birthday",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        id: 5,
        icon: service3,
        title: "Wedding",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        id: 6,
        icon: service2,
        title: "Office-party",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ];

  return (
    <>
      <Container fluid className='service py-5 my-2'>
        <Container className=''>
          <div className='my-5'>
            <h2 className='section-heading '>
              <span style={{ color: "#FE3E01" }}>E-Planner</span> Services
            </h2>
            <h4 className='sub-heading '>
              We make your events smart & impactful by personalised event
              management services.
            </h4>
          </div>
          <Row>
            {services.map((service) => {
              return (
                <Col sx={12} md={6} className='' key={service.id}>
                  <div className='icon-box'>
                    <Image
                      src={service.icon}
                      fluid
                      height='60px'
                      width='60px'
                    />
                  </div>
                  <div className='text'>
                    <h3 className='title'>{service.title}t</h3>
                    <p className='description'>{service.description}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Services