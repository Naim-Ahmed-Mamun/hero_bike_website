import React from 'react';
import { Container } from 'react-bootstrap';
import './CompanyLogos.css';
import logo_1 from '../../../img/logo_sec_1.png';
import logo_2 from '../../../img/logo_sec_2.png';
import logo_3 from '../../../img/logo_sec_3.png';
import logo_4 from '../../../img/logo_sec_4.png';
import logo_5 from '../../../img/logo_sec_5.png';
import logo_6 from '../../../img/logo_sec_6.png';


const CompanyLogos = () => {
  return (
    <>
      <div className="logos">
        <Container>
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
              <img src={logo_1} alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
              <img src={logo_2} alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
              <img src={logo_3} alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
              <img src={logo_4} alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
              <img src={logo_5} alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
              <img src={logo_6} alt="" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CompanyLogos;