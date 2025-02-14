import React from 'react'
import "./About.css";
import About_icon from "../../assets/about.png";
import Play_icon from "../../assets/play-icon.png";

const About = () => {
    
  return (
    <div className='about'>
      <div className='left'>
            <img src={About_icon} className='About-icon'/>
            <img src={Play_icon} className='Play-icon'/>
      </div>
      <div className='left'>
        <h3>About University</h3>
        <h2>Nurturing tomorrow Leaders todays</h2>
        <p>A university function is a special event that brings students, faculty, and staff together to celebrate achievements, showcase talents, or promote cultural and academic activities. These functions can include annual dinners, convocation ceremonies, cultural festivals, and academic conferences.</p>
        <p>They provide a platform for students to express creativity, develop leadership skills, and foster a sense of community.</p>
        <p>A university function is a vibrant event that brings together students, faculty, and staff to celebrate various aspects of academic and social life. . </p>
      </div>
    </div>
  )
}

export default About
