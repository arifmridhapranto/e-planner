import React from 'react'
import { Container } from 'react-bootstrap'
import Tbutton from '../Buttons/Tbutton';
import {Link } from 'react-router-dom'

const Cta = () => {
  return (
    <>
      <Container
        className='p-5 text-center'
        style={{
          background: "rgb(1, 203, 147)",
          borderRadius: "10px 0px 10px 0px",
        }}>
        <h2 className='mt-5 text-white section-heading'>
          Get in Touch With Us!
        </h2>
        <h4 className='my-3 text-white section-subheading'>
          Ask questions, schedule a meeting or request a proposal. Let’s Get
          Started
        </h4>
        <Link to='/contact'>
          <Tbutton text='Contact Us Now' />
        </Link>
      </Container>
    </>
  );
}

export default Cta