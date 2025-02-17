import React, { useRef } from "react";
import "./Testimonial.css";
import next_btn from "../../assets/next-icon.png";
import back_btn from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonial = () => {

const slidebar = useRef();

let tx = 0;

const moveForword = () =>{
  if (tx > -50){
    tx -= 25;
  }
  slidebar.current.style.transform = `translateX(${tx}%)`;
}
const moveBackword = () =>{
  if (tx < 0){
    tx += 25;
  }
  slidebar.current.style.transform = `translateX(${tx}%)`;
}


  return (
    <div className="testimonial">
      <img src={next_btn} className="next-btn" onClick={moveForword} />
      <img src={back_btn} className="back-btn" onClick={moveBackword} />
      <div className="slider">
        <ul ref={slidebar}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h2>Ayesha Bilal</h2>
                  <span>Edusity, Pakistan</span>
                </div>
              </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at
              accusantium minus omnis alias illum dolorem corrupti! Atque, velit
              voluptatem. 
            </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h2>Usman Hassan</h2>
                  <span>Edusity, Pakistan</span>
                </div>
              </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at
              accusantium minus omnis alias illum dolorem corrupti! Atque, velit
              voluptatem.
            </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h2>Sidra Fraz</h2>
                  <span>Edusity, Pakistan</span>
                </div>
              </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at
              accusantium minus omnis alias illum dolorem corrupti! Atque, velit
              voluptatem. 
            </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h2>Abdullah Shah</h2>
                  <span>Edusity, Pakistan</span>
                </div>
              </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at
              accusantium minus omnis alias illum dolorem corrupti! Atque, velit
              voluptatem. 
            </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
