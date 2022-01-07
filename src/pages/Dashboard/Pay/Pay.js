import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
// import { useParams } from 'react-router';

const Pay = () => {
   const navigate = useNavigate();
   // use form
   const { register, handleSubmit, reset } = useForm();
   // auth
   const { user } = useAuth();
   // single product
   const { singleProduct } = useContext(AuthContext);
   // form submit
   const onSubmit = data => {
      data.name = user?.displayName;
      data.email = user?.email;
      data.productImg = singleProduct?.image;
      data.productName = singleProduct?.name;
      data.status = singleProduct?.status;
      fetch('https://vast-shelf-14740.herokuapp.com/orders', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(data)
      })
         .then(res => res.json())
         .then(data => {
            if (data.acknowledged) {
               Swal.fire({
                  type: 'success',
                  title: 'Order Place Successfully',
               })
               reset()
               navigate('/dashboard/myOrder')
            }
            // console.log(data);
         })
      console.log(data)
   };
   return (
      <div>
         <div className="order_place">
            <div className="form_container">
               <h2 className="text-center mb-4">Order</h2>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <input defaultValue={user?.displayName} {...register("name")} placeholder="Name" />
                  <input type="email" defaultValue={user?.email} {...register("email")} placeholder="Email" />
                  <input {...register("city")} placeholder="City" />
                  <input {...register("phone")} placeholder="Phone" />
                  <input defaultValue={singleProduct?.name} {...register("productName")} placeholder="productName" />
                  <input type="submit" value="Place Order" />
               </form>
            </div>
         </div>
      </div>
   );
};

export default Pay;