import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../img/logo.png';
import './Header.css';

const Header = () => {
   const { user, logout } = useAuth()
   return (
      <>
         <div className="navBar_container">
            <Navbar collapseOnSelect expand="lg" variant="dark">
               <Container>
                  <NavLink to="/home"><img src={logo} alt="" /></NavLink>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav className="ms-auto nav_menu">
                        <NavLink className="nav_link" to="/home">Home</NavLink>
                        <NavLink className="nav_link" to="/about">About</NavLink>
                        <NavLink className="nav_link" to="/allProducts">All Products</NavLink>
                        {user.email && <NavLink className="nav_link" to="/dashboard">Dashboard</NavLink>}
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