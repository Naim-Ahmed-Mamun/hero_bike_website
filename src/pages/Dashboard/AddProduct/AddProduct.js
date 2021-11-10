import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import './AddProduct.css';

const AddProduct = () => {
   const { register, handleSubmit,reset } = useForm();
   const onSubmit = data => {
      data.status = 'pending'
      fetch('http://localhost:5000/addProduct',{
         method:'POST',
         headers:{
            'content-type':'application/json'
         },
         body:JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => {
         // console.log(data)
         if(data.acknowledged){
            Swal.fire({
               type: 'success',
               title: 'Product Added Successfully',
             })
            reset()
         }
      })
      console.log(data)
   };
   return (
      <div className="add_product">
         <h3 className="text-center mb-4 text-danger">Add Product</h3>
         <div className="form_container">
            <form onSubmit={handleSubmit(onSubmit)}>
               <input {...register("productName")} placeholder="Product Name" />
               <input type="number" {...register("price")} placeholder="Price" />
               <textarea rows="5" {...register("description")} placeholder="Description" />
               <input {...register("imgUrl")} placeholder="imageUrl" />
               <input type="submit" value="Add Product" />
            </form>
         </div>
      </div>
   );
};

export default AddProduct;