import React, { useState } from 'react';
// import sidebarData from '../SidebarData/SidebarData';
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import './Dashboard.css';
import Pay from '../Pay/Pay';
import MyOrder from '../MyOrder/MyOrder';
import Review from '../Review/Review';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProduct from '../ManageProduct/ManageProduct';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../../components/AdminRoute/AdminRoute';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazonPay } from '@fortawesome/free-brands-svg-icons';
import { faClipboardList, faCommentDots, faPlus, faShoppingCart, faSignOutAlt, faUser } 
from '@fortawesome/free-solid-svg-icons';
import logo from '../../../img/footer-logo.png';
import menubar from '../../../img/menu_bar.png';


const Dashboard = () => {
   let { path, url } = useRouteMatch();
   const { logout,admin } = useAuth();
   const [toggle,setToggle] = useState(false);

   return (
      <>
         <div className="d-flex">
               <div onClick={() => setToggle(!toggle)} className="menubar"><img src={menubar} alt="" /></div>
            <div className={toggle ? "showSidebar" : "sidebar_left_side"}>
               <div className="dashboard_logo mb-5">
                  <NavLink to="/home"><img src={logo} alt="" /></NavLink>
               </div>
               <ul>
                 {!admin &&  <NavLink to={`${url}`}>
                     <li className="sidebar_item mb-3 text-white">
                         <div className="icon"><i><FontAwesomeIcon icon={faAmazonPay}/></i></div>
                         <div className="title"><h4>Pay</h4></div>
                     </li>
                  </NavLink>}
                 {!admin && <NavLink to={`${url}/myOrder`}>
                     <li className="sidebar_item mb-3 text-white">
                         <div className="icon"><i><FontAwesomeIcon icon={faShoppingCart}/></i></div>
                         <div className="title"><h4>My Orders</h4></div>
                     </li>
                  </NavLink>}
                 {!admin && <NavLink to={`${url}/review`}>
                     <li className="sidebar_item mb-3 text-white">
                         <div className="icon"><i><FontAwesomeIcon icon={faCommentDots}/></i></div>
                         <div className="title"><h4>Review</h4></div>
                     </li>
                  </NavLink>}
                 {admin && <NavLink to={`${url}/manageAllOrder`}>
                     <li className="sidebar_item mb-3 text-white">
                         <div className="icon"><i><FontAwesomeIcon icon={faClipboardList}/></i></div>
                         <div className="title"><h4>Manage All Orders</h4></div>
                     </li>
                  </NavLink>}
                 {admin && <NavLink to={`${url}/addProduct`}>
                     <li className="sidebar_item mb-3 text-white">
                         <div className="icon"><i><FontAwesomeIcon icon={faPlus}/></i></div>
                         <div className="title"><h4>Add Product</h4></div>
                     </li>
                  </NavLink>}
                  {admin &&<NavLink to={`${url}/makeAdmin`}>
                     <li className="sidebar_item mb-3 text-white">
                         <div className="icon"><i><FontAwesomeIcon icon={faUser}/></i></div>
                         <div className="title"><h4>Make Admin</h4></div>
                     </li>
                  </NavLink>}
                 {admin && <NavLink to={`${url}/manageProduct`}>
                     <li className="sidebar_item mb-3 text-white">
                         <div className="icon"><i><FontAwesomeIcon icon={faClipboardList}/></i></div>
                         <div className="title"><h4>Manage All Product</h4></div>
                     </li>
                  </NavLink>}
                  <NavLink to="/login">
                     <li onClick={logout} className="sidebar_item mb-3 text-white">
                         <div className="icon"><i><FontAwesomeIcon icon={faSignOutAlt}/></i></div>
                         <div className="title"><h4>Logout</h4></div>
                     </li>
                  </NavLink>
               </ul>
            </div>
            <div className="dash_right_side">
               {/* <div className="dash_nav"></div> */}
               <Switch>
                  <Route exact path={`${path}`}>
                     <Pay></Pay>
                  </Route>
                  <Route exact path={`${path}/myOrder`}>
                     <MyOrder></MyOrder>
                  </Route>
                  <Route exact path={`${path}/review`}>
                     <Review></Review>
                  </Route>
                  <Route exact path={`${path}/manageAllOrder`}>
                     <ManageAllOrder></ManageAllOrder>
                  </Route>
                  <AdminRoute exact path={`${path}/addProduct`}>
                     <AddProduct></AddProduct>
                  </AdminRoute>
                  <AdminRoute exact path={`${path}/makeAdmin`}>
                     <MakeAdmin></MakeAdmin>
                  </AdminRoute>
                  <Route exact path={`${path}/manageProduct`}>
                     <ManageProduct></ManageProduct>
                  </Route>
               </Switch>
            </div>
         </div>
      </>
   );
};

export default Dashboard;