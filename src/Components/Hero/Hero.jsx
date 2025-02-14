import React from 'react'
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png"; 

const Hero = () => {
  return (
    <div className='hero container'>
    <div  className='hero-text'>
      <h1 className='hero-text'>We ensure better Education for better World</h1>
      <p>Our cutting-edge circullum is designed empower students with knowledge, skill and experience need to excel in the field of</p>
      <button className='btn'>Explore More <img src={dark_arrow}/></button>
</div>
    </div>
  )
}

export default Hero
