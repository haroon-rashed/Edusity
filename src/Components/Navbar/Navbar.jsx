import React, { useEffect, useState } from 'react'
import "./Navbar.css";
import logo from "../../assets/logo.png"; 
import menu from "../../assets/menu-icon.png"; 
import { Link } from 'react-scroll';

const Navbar = () => {

    const [sticky, setStickey] = useState(false);
useEffect(()=>{
    window.addEventListener('scroll', ()=>{
        (window.scrollY > 50 ? setStickey(true): setStickey(false));
    })
},[])

const [showMenu, setShoeMenu] = useState(false);

const toggleMenu = () =>{
  showMenu? setShoeMenu(false) : setShoeMenu(true);
}

  return (

    <nav className={`container  ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt='Logo' className='logo'/>
      <ul className={showMenu? '': 'hide-menu'}> 
        <li><Link to="hero" smooth={true} offset={-260} duration={500}>Home</Link></li>
        <li><Link to="hero" smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to="testimonial" smooth={true} offset={-260} duration={500}>Testimonial</Link></li>
        <li><Link to="contact" smooth={true} offset={-260} duration={1000}><button className='btn'>Contact Us</button></Link></li>
      </ul>
      <img src={menu} className='menu-icon' alt=""  onClick={toggleMenu} />
    </nav>

  )
}

export default Navbar
