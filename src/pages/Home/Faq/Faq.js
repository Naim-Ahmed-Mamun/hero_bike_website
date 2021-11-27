import React from 'react';
import './Faq.css';
import faqImg from '../../../img/faq.svg';
import { Accordion } from 'react-bootstrap';

const Faq = () => {
   return (
      <>
         <section className="faq">
            <div className="container">
               <div className="sec_title mb-4" data-aos="fade-up">
                  <h2>FAQ</h2>
               </div>
               <div className="row align-items-center">
                  <div className="col-lg-7 col-md-7" data-aos="fade-up">
                     <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                           <Accordion.Header>What’s the difference between a mountain bike and a road bike?</Accordion.Header>
                           <Accordion.Body>
                              In essence, the differences are simple: Mountain bikes are designed to be ridden more slowly, on more varied terrain, and with more emphasis on control over speed. Road bikes are ridden on smoother and less varied terrain and tend to prioritize speed over control. In practice, this means mountain bikes generally have larger tires, suspension, a wider range of gears with a lower top gear (since you don’t tend to go as fast on dirt), flat and wide handlebars, and geometry that puts the rider in a more upright position
                           </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                           <Accordion.Header>How long should I cycle at the gym?</Accordion.Header>
                           <Accordion.Body>
                              What are your goals? If you want to lose weight, we suggest cramming a few short intervals (periods of high intensity) into the time you have available. Let’s say you warm up for five minutes, then complete 10 one-minute efforts with two minutes of rest in between, before cooling down for another five minutes. You’ll have time to change and get back to work before lunch is over.
                           </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                           <Accordion.Header>Can you use mountain bikes on the road?</Accordion.Header>
                           <Accordion.Body>
                              Of course! Mountain bikes favor comfort and stability over speed, so they will feel a little sluggish compared to road bikes. However, this doesn’t mean they aren’t road-worthy machines. We suggest putting a pair of slick tires (with no tread) on your mountain bike and trying a few road rides. If you love it, you can splurge on a road bike. If not, you’re only out $50 for the tires, rather than hundreds or thousands for a new bike.
                           </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                           <Accordion.Header>What size road bike should I ride?</Accordion.Header>
                           <Accordion.Body>
                              One that allows you to comfortably reach the pedals, brakes, and water-bottle cages. If the seatpost is barely showing and you feel stretched out, the bike is too large. If you need to extend the seatpost near or past its minimum insertion (which is marked on the post) or think you need a stem longer than 110mm, you could probably go larger. We always recommend trying a bike before you buy it or visiting a bike shop for a professional fitting.
                           </Accordion.Body>
                        </Accordion.Item>
                     </Accordion>
                  </div>
                  <div className="col-lg-5 col-md-5" data-aos="fade-up">
                     <div className="faq_img">
                        <img src={faqImg} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Faq;