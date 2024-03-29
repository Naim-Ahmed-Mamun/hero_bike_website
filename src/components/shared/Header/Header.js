import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../img/logo.png';
import './Header.css';

const Header = () => {
   // use auth
   const { user, logout } = useAuth()
   // sticky state
   const [sticky,setSticky] = useState(false);
   const stickyNavbar = () => {
      if(window.scrollY > 50){
         setSticky(true)
      }
      else{
         setSticky(false)
      }
   }
   window.addEventListener('scroll',stickyNavbar);

   return (
      <>
         <div className={sticky ? 'sticky navBar_container':'navBar_container'}>
            <Navbar collapseOnSelect expand="lg" variant="dark">
               <Container>
                  <NavLink to="/home"><img src={logo} alt="" /></NavLink>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav className="ms-auto nav_menu">
                        <NavLink className={({ isActive }) => "nav_link" + (isActive ? " activated" : "")} to="/home">Home</NavLink>
                        <NavLink className={({ isActive }) => "nav_link" + (isActive ? " activated" : "")} to="/about">About</NavLink>
                        <NavLink className={({ isActive }) => "nav_link" + (isActive ? " activated" : "")} to="/allProducts">All Products</NavLink>
                        {user.email && <NavLink activeStyle={{color:"#fa3e2c"}} className="nav_link" to="/dashboard">Dashboard</NavLink>}
                        {
                           user?.email ? <span>Hi! {user?.displayName}
                              <button onClick={logout} className="regular_btn ms-2">Logout</button>
                           </span>
                          : <NavLink to="/login"><button className="regular_btn">Login</button></NavLink>
                        }
                     </Nav>
                  </Navbar.Collapse>
               </Container>
            </Navbar>
         </div>
      </>
   );
};

export default Header;