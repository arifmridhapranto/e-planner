import React from 'react'
import error from '../Assets/Images/error.jpg'
import { Container } from 'react-bootstrap';
import Image from "react-bootstrap/Image";
const NotFound = () => {
  return (
      <Container fluid>
          <Image src={error} alt="Not Found"  fluid/>
      </Container>
  )
}

export default NotFound