import React from 'react'
import { Container } from "react-bootstrap";
import './HeroCarousal.css';
  // import Swiper styles
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/pagination";
  // import required modules
  import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Buttons from '../Buttons/Buttons';
import Tbutton from '../Buttons/Tbutton';

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
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                backgroundBlendMode: "soft-light",
              }}>
              <Container
                style={{ height: "90vh" }}
                className='d-flex justify-content-center align-items-center flex-column w-md-50 mx-auto w-100 '>
                <h1 className='banner-heading'>WE PERSONALIZE YOUR EVENTS</h1>
                <p className='banner-pera'>
                  We are the Event Management Specialists
                </p>
                <div className='btnSet'>
                  <Link to='/contact'>
                    <Tbutton text='Book Now' />
                  </Link>
                  <Link to='/contact'>
                    <Buttons text='Contact Us' />
                  </Link>
                </div>
              </Container>
            </SwiperSlide>
          );
        })}
</Swiper>
    </>
  );
}
export default HeroCarousal;

