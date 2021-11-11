import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Footer from '../../components/shared/Footer/Footer';
import Header from '../../components/shared/Header/Header';
import about_img from '../../img/about_img.svg';
import './About.css';

const About = () => {
  return (
    <>
      <Header></Header>
      <div className="about_us">
        <div className="container">
          <div className="sec_title mb-4">
            <h2>About Us</h2>
          </div>
          <div className="row align-items-center about_wrapper">
            <div className="col-lg-6">
              <div className="about_img">
                <img src={about_img} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_content">
                <div className="about_title">
                  <h2>Advantages of our company</h2>
                  <p>We’re a bike shop, a family and a team of riders, helping folks in New York explore their passion for cycling. Biking is more than transportation or exercise, it’s a lifestyle. Whether you need help with where to ride or are in need.</p>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="about_list">
                      <li><FontAwesomeIcon className="icon" icon={faCheck} /> <span>Relax renting;</span> </li>
                      <li><FontAwesomeIcon className="icon" icon={faCheck} /> <span>Standard renting;</span> </li>
                      <li><FontAwesomeIcon className="icon" icon={faCheck} /> <span>Special Discount;</span> </li>
                      <li><FontAwesomeIcon className="icon" icon={faCheck} /> <span>Luggage Storage;</span> </li>
                      <li><FontAwesomeIcon className="icon" icon={faCheck} /> <span>Repair kit;</span> </li>
                      <li><FontAwesomeIcon className="icon" icon={faCheck} /> <span>Secure & equipped;</span> </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="about_list">
                      <li><FontAwesomeIcon className="icon" icon={faCheck} /> <span>Special request;</span> </li>
                      <li><FontAwesomeIcon className="icon" icon={faCheck} /> <span>Always Overhauled;</span> </li>
                      <li><FontAwesomeIcon className="icon" icon={faCheck} /> <span>Mechanical Assistance;</span> </li>
                      <li><FontAwesomeIcon className="icon" icon={faCheck} /> <span>Premium Assistance;</span> </li>
                      <li><FontAwesomeIcon className="icon" icon={faCheck} /> <span>Pleasant staff.</span> </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;