import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
   const { register, handleSubmit, reset } = useForm();
   const { user } = useAuth();
   // submit form
   const onSubmit = data => {
      data.name = user?.displayName;
      data.email = user?.email;
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
               reset()
            }
         })
      if(user.email){
         console.log(data)
      }
   };
   return (
      <>
         <div>
            <h3 className="text-center my-5 text-danger">Review Your Order</h3>
            <div className="review_form">
               <div className="form_container">
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <input defaultValue={user?.displayName} {...register("name")} placeholder="Product Name" />
                     <input defaultValue={user?.email} {...register("email")} placeholder="Email" />
                     <input {...register("company")} placeholder="Your Company" />
                     <textarea rows="5" {...register("review")} placeholder="Review" />
                     <input step="any" type="number" min="0" max="5" {...register("rating")} placeholder="Rating" />
                     <input type="submit" value="Add Product" />
                  </form>
               </div>
            </div>
         </div>
      </>
   );
};

export default Review;