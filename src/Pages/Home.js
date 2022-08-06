import React from 'react'
import About from '../Components/About/About'
import Contact from '../Components/Contact/Contact';
import Cta from '../Components/Cta/Cta';
import Freatures from '../Components/Features/Freatures';
import HeroCarousal from '../Components/HeroCarousal/HeroCarousal'
import Services from '../Components/Services/Services';


const Home = () => {
  return (
    <>
      <HeroCarousal />
      <Freatures />
      <About />
      <Services />
      <Cta />
      <Contact/>

    </>
  );
}

export default Home