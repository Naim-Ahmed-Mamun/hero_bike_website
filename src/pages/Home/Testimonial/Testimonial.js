import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import './Testimonial.css';

const Testimonial = () => {
   const [testimonials, setTestimonials] = useState([]);
   useEffect(() => {
      fetch('http://localhost:5000/review')
         .then(res => res.json())
         .then(data => setTestimonials(data))
   }, [])
   return (
      <>
         <div className="testimonial">
            <div className="container">
               <div className="sec_title mb-4">
                  <h2>Testimonial</h2>
               </div>
               <div className="row">
                  {
                     testimonials.map(testimonial => {
                        return (
                           <div key={testimonial._id} className="col-lg-4">
                              <div className="p-3 shasow">
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