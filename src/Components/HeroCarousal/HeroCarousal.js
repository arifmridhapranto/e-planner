import React from 'react'
import { Container, Button } from "react-bootstrap";
import './HeroCarousal.css';
  // import Swiper styles
import 'swiper/css';
  import { Swiper, SwiperSlide } from "swiper/react";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/pagination";
  // import required modules
  import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const HeroCarousal = () => {
  const images = [
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
    "https://images.unsplash.com/photo-1659635749900-aab7cfce4dc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  ];



  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        style={{height:'90vh'}}
      >

        {images.map((image, index) => {
          return (
            <SwiperSlide
              key={index}
              style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}>
              <Container
                style={{ height: "90vh" }}
                className='d-flex justify-content-center align-items-center flex-column w-50 mx-auto'>
                <h1 className='text-white'>Lorem ipsum dolor sit amet. </h1>
                <p className='text-white'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  omnis tenetur autem quod blanditiis laudantium, illum esse
                  dignissimos incidunt dolor vitae laboriosam distinctio nisi,
                  sint a asperiores, odio tempora excepturi.{" "}
                </p>
                <p>
                  <Button size='lg' variant='primary' className='m-4'>
                    Primary
                  </Button>
                  <Button variant='outline-info'>Info</Button>
                </p>
              </Container>
            </SwiperSlide>
          );
        })}
</Swiper>
    </>
  );
}
export default HeroCarousal;

