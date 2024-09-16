import React from 'react';
import './Contact.css';
import Lottie from "lottie-react";
import ContactPageLottie from '../../assets/ContactPageLottie2.json'
import backgroundImage from '../../assets/back1.jpg'; 

const Contact = () => {
  return (
    
    <div className="contact-main-container">
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-image">
        <Lottie loop={true} animationData={ContactPageLottie}  />
        </div>
        <div className="contact-form">
          <h1>Contact Us</h1>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4"></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  
  );
};

export default Contact;
