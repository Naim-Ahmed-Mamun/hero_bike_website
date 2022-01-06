import React from 'react';
import { Container } from 'react-bootstrap';
import './Counter.css';
import counter_img_1 from '../../../img/counter_user.png';
import counter_img_2 from '../../../img/counter-modal.png';
import counter_img_3 from '../../../img/counter-bike.png';
import counter_img_4 from '../../../img/counter-branch.png';

const Counter = () => {
   return (
      <>
         <div className="counter_bg">
            <Container>
               <div className="row">
                  <div className="col-lg-3 col-md-6 mb-3" data-aos="fade-up">
                     <div className="counter_box text-center">
                        <div className="counter_icon_img">
                           <img src={counter_img_1} alt="" />
                           <h5 className='text-white counter_no'>2369+</h5>
                        </div>
                           <h5 className='clients text-white'>HAPPY CLIENTS</h5>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-3" data-aos="fade-up">
                     <div className="counter_box text-center">
                        <div className="counter_icon_img">
                           <img src={counter_img_2} alt="" />
                           <h5 className='text-white counter_no'>728+</h5>
                        </div>
                           <h5 className='clients text-white'>AWARDS WIN</h5>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-3" data-aos="fade-up">
                     <div className="counter_box text-center">
                        <div className="counter_icon_img">
                           <img src={counter_img_3} alt="" />
                           <h5 className='text-white counter_no'>1482+</h5>
                        </div>
                           <h5 className='clients text-white'>VEHICLES IN STOCK</h5>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-3" data-aos="fade-up">
                     <div className="counter_box text-center">
                        <div className="counter_icon_img">
                           <img src={counter_img_4} alt="" />
                           <h5 className='text-white counter_no'>542+</h5>
                        </div>
                           <h5 className='clients text-white'>DEALER BRANCHES</h5>
                     </div>
                  </div>
               </div>
            </Container>
         </div>
      </>
   );
};

export default Counter;