import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import "./App.css";
import Hero from './Components/Hero/Hero';
import Programm from './Components/Programm/Programm';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonial from './Components/Testimonials/Testimonial';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <Title subTitle="Our Program" title="What we Offered"/>
      <Programm/>
      <About/>
      <Title subTitle="Gallery" title="Campus Photos"/>
      <Campus/>
      <Title subTitle="Testimonials" title="What Students Says"/>
      <Testimonial/>
      <Title subTitle="Contact Us" title="Get in touch"/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}

export default App
