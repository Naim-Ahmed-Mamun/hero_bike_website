import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import { Rating } from 'react-simple-star-rating';
import { HashLink } from 'react-router-hash-link';

const Review = () => {
   const { register, handleSubmit, reset } = useForm();
   // const [rating,setRating] = useState('');
   const [ratings, setRatings] = useState(0);
   console.log(ratings);

   // Catch Rating value
   const handleRating = (rate) => {
      setRatings(rate)
      // other logic
      console.log(rate)
   }
   const { user } = useAuth();
   // submit form
   const onSubmit = data => {
      data.name = user?.displayName;
      data.email = user?.email;
      data.ratings = ratings;
      fetch('https://vast-shelf-14740.herokuapp.com/review', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(data)
      })
         .then(res => res.json())
         .then(data => {
            // console.log(data)
            if (data.acknowledged) {
               Swal.fire({
                  type: 'success',
                  title: 'Review Added Successfully',
               })
               reset();
               <HashLink to="/home#testimonials"></HashLink>;
            }
         })
      if (user.email) {
         console.log(data)
      }
   };

   const tooltipArray = [
      'Terrible',
      'Terrible+',
      'Bad',
      'Bad+',
      'Average',
      'Average+',
      'Great',
      'Great+',
      'Awesome',
      'Awesome+'
   ]

   return (
      <>
         <div>
            <h3 className="text-center my-5 text-danger" data-aos="fade-up">Review Your Order</h3>
            <div className="review_form">
               <div className="form_container" data-aos="fade-up">
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <input defaultValue={user?.displayName} {...register("name")} placeholder="Product Name" />
                     <input defaultValue={user?.email} {...register("email")} placeholder="Email" />
                     <input {...register("company")} placeholder="Your Company" />
                     <textarea rows="5" {...register("review")} placeholder="Review" />
                     {/* <input step="any" type="number" min="0" max="5" {...register("rating")} placeholder="Rating" /> */}
                     <Rating onClick={handleRating} tooltipArray={tooltipArray}
                        allowHalfIcon showTooltip ratingValue={ratings} />
                     <input className='mt-3' type="submit" value="Save" />
                  </form>
               </div>
            </div>
         </div>
      </>
   );
};

export default Review;