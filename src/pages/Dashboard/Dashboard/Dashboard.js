import React from 'react';
import sidebarData from '../SidebarData/SidebarData';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import './Dashboard.css';
import Pay from '../Pay/Pay';
import MyOrder from '../MyOrder/MyOrder';
import Review from '../Review/Review';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProduct from '../ManageProduct/ManageProduct';
import useAuth from '../../../hooks/useAuth';
import Login from '../../../components/shared/Login/Login/Login';


const Dashboard = () => {
   let { path, url } = useRouteMatch();
   const {logout} = useAuth()
   return (
      <>
         <div className="d-flex">
            <div className="sidebar_left_side">
               <ul>
                  {
                     sidebarData.map(sidebar => {
                        return (
                           <Link to={`${url}${sidebar?.link}`}>
                              <li onClick={sidebar.logout && logout} key={sidebar.id}
                                 className="sidebar_item mb-3 text-white">
                                 <div className="icon"><i>{sidebar?.icon}</i></div>
                                 <div className="title"><h4>{sidebar?.title}</h4></div>
                              </li>
                           </Link>
                        )
                     })
                  }
               </ul>
            </div>
            <div className="dash_right_side">
               <div className="dash_nav"></div>
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
                  <Route exact path={`${path}/addProduct`}>
                    <AddProduct></AddProduct>
                  </Route>
                  <Route exact path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                  </Route>
                  <Route exact path={`${path}/manageProduct`}>
                    <ManageProduct></ManageProduct>
                  </Route>
                  <Route exact path={`${path}/login`}>
                    <Login></Login>
                  </Route>
               </Switch>
            </div>
         </div>
      </>
   );
};

export default Dashboard;