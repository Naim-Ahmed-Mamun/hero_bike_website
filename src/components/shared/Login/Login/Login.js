import React from 'react';
import loginImg from '../../../../img/login-img.svg';
import { useForm } from "react-hook-form";
import './Login.css';
import Header from '../../Header/Header';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Login = () => {
   // use form
   const { register, handleSubmit, } = useForm();
   // auth
   const {loginUser} = useAuth()
   // location
   const location = useLocation()
   // history
   const navigate = useNavigate()
   // submit
   const onSubmit = data => {
      console.log(data)
      loginUser(data.email,data.password,location,navigate)
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
                     <h2 className="text-center mb-4">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                           <input type="email" {...register("email")} placeholder="Email" />
                           <input type="password" {...register("password")} placeholder="Password" />
                           <input type="submit" value="Login" />
                        </form>
                        <p className="text-center">New User ? <Link to="/register">Please Register</Link></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Login;