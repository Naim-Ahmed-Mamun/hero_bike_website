import React from 'react';
import heroImg from '../../../img/banner-img-1.png';
import './HeroBanner.css';

const HeroBanner = () => {
   return (
      <>
         <div className="hero_banner">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6">
                     <div className="hero_content">
                        <h2>Rides made <br /> better</h2>
                        <p>Believe in your cycle, and it will lead your way. The best rides happen on two wheels. Ride it like a pro it’s not just riding, it’s a feeling. Ride and live today.</p>
                        <button className="regular_btn">Buy Now</button>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="hero_img">
                        <img src={heroImg} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HeroBanner;