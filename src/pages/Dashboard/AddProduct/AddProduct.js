import React, { useState } from 'react';
// import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import './AddProduct.css';

const AddProduct = () => {
   // const { register, handleSubmit,reset } = useForm();
   const [image,setImage] = useState(null);
   const [name,setName] = useState('');
   const [price,setPrice] = useState('');
   const [description,setDescription] = useState('');

   const handleFormSubmit = (e) => {
      e.preventDefault()
      // console.log(data)
      const formData = new FormData();
      formData.append('productName',name)
      formData.append('price',price);
      formData.append('description',description);
      formData.append('image',image)
      // data.status = 'pending';
      // https://vast-shelf-14740.herokuapp.com/addProduct
      fetch('http://localhost:5000/addProduct',{
         method:'POST',
         // headers:{
         //    'content-type':'application/json'
         // },
         body:formData
      })
      .then(res => res.json())
      .then(data => {
         console.log(data)
         if(data.acknowledged){
            Swal.fire({
               type: 'success',
               title: 'Product Added Successfully',
             })
            // reset()
         }
      })
      // console.log(formData)
   };
   return (
      <div className="add_product" data-aos="fade-up">
         <h3 className="text-center mb-4 text-danger" data-aos="fade-up">Add Product</h3>
         <div className="form_container">
            <form onSubmit={handleFormSubmit}>
               <input onChange={e => setName(e.target.value)} required placeholder="Product Name" />
               <input onChange={e => setPrice(e.target.value)} type="number" required placeholder="Price" />
               <textarea onChange={e => setDescription(e.target.value)} rows="5" required placeholder="Description" />
               {/* <input placeholder="imageUrl" required /> */}
               <input onChange={e => setImage(e.target.files[0])} accept="image/*" type="file" placeholder="Chose Image" required />
               <input type="submit" value="Add Product" />
            </form>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
               <input {...register("productName")} required placeholder="Product Name" />
               <input type="number" {...register("price")} required placeholder="Price" />
               <textarea rows="5" {...register("description")} required placeholder="Description" />
               <input {...register("imgUrl")} placeholder="imageUrl" required />
               <input onChange={e => setImage(e.target)} accept="image" type="file" placeholder="Chose Image" required />
               <input type="submit" value="Add Product" />
            </form> */}
         </div>
      </div>
   );
};

export default AddProduct;