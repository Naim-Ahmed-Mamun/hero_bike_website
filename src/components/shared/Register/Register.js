import React from 'react';
import loginImg from '../../../img/register-img.svg';
import { useForm } from "react-hook-form";
import './Register.css';
import Header from '../../shared/Header/Header';
import { Link,useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
   // use form
   const { register, handleSubmit, reset} = useForm();
   // auth
   const {registerUser} = useAuth();
   // history
   const navigate = useNavigate()
   // submit form
   const onSubmit = data => {
      registerUser(data.email,data.password,data.name,reset,navigate)
      console.log(data)
   };

   return (
      <>
      <Header></Header>
         <div className="login">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6" data-aos="fade-up">
                     <div className="login_img">
                        <img src={loginImg} alt="" />
                     </div>
                  </div>
                  <div className="col-lg-6" data-aos="fade-up">
                     <div className="form_container">
                        <h2 className="text-center mb-4">Register</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                           <input type="text" {...register("name")} placeholder="Name" />
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