import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const MakeAdmin = () => {
   const { register, handleSubmit,reset } = useForm();
   // form submit
	const onSubmit = data => {
      const adminEmail = data.email;
		fetch(`https://vast-shelf-14740.herokuapp.com/makeAdmin/${adminEmail}`,{
         method:'PUT'
      })
		.then(res => res.json())
		.then(data => {
			if (data.modifiedCount) {
				Swal.fire({
					type: 'success',
					title: 'Admin Added Successfully',
				})
				reset()
			}
         else{
            Swal.fire({
					type: 'error',
					title: 'Ops! User Not Exist',
				})
				reset()
         }
			console.log(data);
		})
		// console.log(adminEmail,data)
	};
   return (
      <>
         <h3 className="text-center my-3 text-danger">Make Admin</h3>
         <div className="form_container mt-5">
            <h2 className="text-center mb-4">Make Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
               <input type="email" {...register("email")} placeholder="Email" />
               <input type="submit" value="Make Admin" />
            </form>
         </div>
      </>
   );
};

export default MakeAdmin;