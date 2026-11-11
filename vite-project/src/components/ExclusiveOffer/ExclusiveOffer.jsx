import React from 'react'
import './ExclusiveOffer.css';
import green from '../../img/green.png'

export default function ExclusiveOffer() {
  return (
   <section className="banner-container">
      <div className="banner-image-wrapper">
        <div className="dots-pattern"></div>
        
        <img 
          src={green} 
          alt="Exclusive Offer Model" 
          className="banner-img"
        />
      </div>

      <div className="banner-content">
        <h2 className="banner-title">Exclusive offer</h2>
        <p className="banner-description">
          Unlock the ultimate style upgrade with our exclusive offer Enjoy savings of up to 40% off on our latest New Arrivals
        </p>

        <div className="timer-container">
          <div className="timer-box">
            <span className="timer-number">06</span>
            <span className="timer-label">Days</span>
          </div>
          <div className="timer-box">
            <span className="timer-number">18</span>
            <span className="timer-label">Hours</span>
          </div>
          <div className="timer-box">
            <span className="timer-number">48</span>
            <span className="timer-label">Min</span>
          </div>
        </div>

        <button className="buy-now-btn">BUY NOW</button>
      </div>
    </section> 
     )
}
