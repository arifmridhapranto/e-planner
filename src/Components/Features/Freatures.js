import React from 'react'

import CountUp from "react-countup";

import { Container, Row, Col,Image } from "react-bootstrap";
import coffee from "../../Assets/Icons/mug-saucer-solid.svg";
import trophy from "../../Assets/Icons/medal-solid.svg";
import comments from "../../Assets/Icons/comments-solid.svg";
import user from "../../Assets/Icons/user-solid.svg";
import './Features.css';

const Freatures = () => {
    const features = [
      {
        id: 1,
        icon: coffee,
        title: "Featured Events",
        count: 420,
      },
      {
        id: 2,
        icon: user,
        title: "Loyal Customers",
        count: 420,
      },
      {
        id: 3,
        icon: comments,
        title: "Good Comments",
        count: 420,
      },
      {
        id: 4,
        icon: trophy,
        title: "Trophies Won",
        count: 420,
      },
    ];
  return (
    <div>
      <Container className='my-5' fluid='sm'>
        <Row>
          {features.map((feature) => {
            return (
              <Col key={feature.id} sm={3}>
                <Container fluid='sm'>
                  <Row className=''>
                    <div className='d-flex justify-content-center align-items-center'>
                      <div className='icon'>
                        <Image
                          src={feature.icon}
                          alt=''
                          style={{
                            width: "60px",
                            height: "60px",
                            color: "#FE3E01",
                          }}
                          className='pe-2'
                          fluid
                        />
                      </div>
                      <div className='count'>
                        <h2>
                          <CountUp start={0} end={feature.count} />
                        </h2>

                        <h5>{feature.title}</h5>
                      </div>
                    </div>
                  </Row>
                </Container>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Freatures;