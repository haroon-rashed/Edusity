import React from 'react'
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png"
import contact_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"



const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "95f05b51-b212-4aee-8477-2662eb7f1aa2");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send Us a message <img src={msg_icon}/></h3>
        <p>Feel fre and contact us whenever you want Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam quo beatae ratione officia similique necessitatibus nemo voluptas, saepe veniam magnam.</p>
        <ul>
            <li><img src={mail_icon}/>Edusity@mail.com</li>
            <li><img src={contact_icon}/>Contact: 51 324875843</li>
            <li><img src={location_icon}/>H-4 Islamabas</li>
        </ul>
      </div>
      <div className='contact-col'>
         <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text"  placeholder='Enter your name' name='name' required/>
            <label>Your Phone Number</label>
            <input type="number"  placeholder='Enter your Phone number' name='phone' required/>
            <label>Your Message</label>
            <textarea name="message" rows="6"  id="" required></textarea>
            <button className='btn dark-btn'>Submit Now<img src={white_arrow}/></button>
         </form>
         <span>{result}</span>
      </div>
    </div>
  )
}


export default Contact
