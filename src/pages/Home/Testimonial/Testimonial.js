import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
// import Rating from 'react-rating';
import useAuth from '../../../hooks/useAuth';
import './Testimonial.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Rating } from 'react-simple-star-rating';

const Testimonial = () => {
   // auth
   const { loading } = useAuth()
   // testimonial state
   const [testimonials, setTestimonials] = useState([]);
   useEffect(() => {
      fetch('https://vast-shelf-14740.herokuapp.com/review')
         .then(res => res.json())
         .then(data => setTestimonials(data))
   }, []);

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive:[
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             infinite: true,
             dots: true
           }
         },
         {
           breakpoint: 768,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             initialSlide: 1
           }
         },
         {
           breakpoint: 576,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
       ]
   };

   return (
      <>
         <div className="testimonial">
            <div className="container">
               <div className="sec_title mb-4" data-aos="fade-up">
                  <h2>Testimonial</h2>
               </div>
               {
                  loading && <div className="text-center">
                     <Spinner className="text-center" animation="border" />
                  </div>
               }
               <Slider {...settings}>
                  {testimonials.map(testimonial => {
                     return (
                        <div key={testimonial._id}>
                           <div className="p-3 shadow testimonial_item rounded">
                              <p>{testimonial?.review}</p>
                              <h3>{testimonial?.name}</h3>
                              {/* <Rating
                                 emptySymbol="far fa-star"
                                 fullSymbol="fas fa-star"
                                 initialRating={testimonial?.rating}
                                 readonly
                              /> */}
                              <Rating readonly size={30} ratingValue={testimonial?.ratings} />
                           </div>
                        </div>
                     )
                  })}
               </Slider>
            </div>
         </div>
      </>
   );
};

export default Testimonial;