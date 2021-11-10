import { faEnvelope, faLocationArrow, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../../../img/footer-logo.png';
import './Footer.css';

const Footer = () => {
   return (
      <>
         <div className="footer">
            <div className="container">
               <div className="row">
                  <div className="col-lg-3">
                     <div className="footer_item text-white">
                        <div className="footer_logo mb-4">
                           <img src={footerLogo} alt="" />
                        </div>
                        <ul>
                           <li>
                              <FontAwesomeIcon className="icon" icon={faMapMarker}/> 
                               Orlando, FL 32819, USA
                           </li>
                           <li>
                              <FontAwesomeIcon className="icon" icon={faPhone}/> 
                              +001 321 254-5874
                           </li>
                           <li>
                              <FontAwesomeIcon className="icon" icon={faEnvelope}/> 
                              info@lawyercourt.com
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-3">
                     <div className="footer_item text-white">
                        <h3 className="mb-4">Usefull Links</h3>
                        <ul>
                           <li><Link to="">Home</Link></li>
                           <li><Link to="">About</Link></li>
                           <li><Link to="">Products</Link></li>
                           <li><Link to="">Faq</Link></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-3">
                     <div className="footer_item text-white">
                        <h3 className="mb-4">Information</h3>
                        <ul>
                           <li>Returns</li>
                           <li>About Us</li>
                           <li>Term & Conditions</li>
                           <li>Privacy Policy</li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-3">
                     <div className="footer_item text-white">
                        <h3 className="mb-4">Subscribe Us</h3>
                        <p>Subscribe to our Newsletter and get bonuses for the next purchase</p>
                        <div className="subscribe_field">
                           <input type="email" placeholder="Enter Your Email" />
                           <span><FontAwesomeIcon icon={faLocationArrow}/></span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Footer;