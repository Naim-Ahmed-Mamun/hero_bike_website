import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import './Testimonial.css';

const Testimonial = () => {
   // testimonial state
   const [testimonials, setTestimonials] = useState([]);
   useEffect(() => {
      fetch('https://vast-shelf-14740.herokuapp.com/review')
         .then(res => res.json())
         .then(data => setTestimonials(data))
   }, [])
   return (
      <>
         <div className="testimonial">
            <div className="container">
               <div className="sec_title mb-4" data-aos="fade-up">
                  <h2>Testimonial</h2>
               </div>
               <div className="row" data-aos="fade-up">
                  {
                     testimonials.map(testimonial => {
                        return (
                           <div key={testimonial._id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                              <div className="p-3 shadow testimonial rounded">
                                 <p>{testimonial?.review}</p>
                                 <h3>{testimonial?.name}</h3>
                                 <Rating
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star"
                                    initialRating={testimonial?.rating}
                                    readonly
                                 />
                              </div>
                           </div>
                        )
                     })
                  }
               </div>
            </div>
         </div>
      </>
   );
};

export default Testimonial;