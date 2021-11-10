import React from 'react';
import loginImg from '../../../img/register-img.svg';
import { useForm } from "react-hook-form";
import './Register.css';
import Header from '../../shared/Header/Header';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
   const { register, handleSubmit, } = useForm();
   const {registerUser} = useAuth();
   const onSubmit = data => {
      registerUser(data.email,data.password,data.name)
      console.log(data)
   };

   return (
      <>
      <Header></Header>
         <div className="login">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6">
                     <div className="login_img">
                        <img src={loginImg} alt="" />
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="form_container">
                        <h2 className="text-center mb-4">Register</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                           <input type="text" {...register("name")} placeholder="Email" />
                           <input type="email" {...register("email")} placeholder="Email" />
                           <input type="password" {...register("password")} placeholder="Password" />
                           <input type="submit" value="Register" />
                           <p className="text-center">Already Register ? <Link to="/login">Please Login</Link></p>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Register;