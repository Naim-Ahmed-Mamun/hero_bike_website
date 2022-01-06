import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import AllProducts from './pages/AllProducts/AllProducts';
import AuthProvider from './context/AuthProvider';
import Login from './components/shared/Login/Login/Login';
import Register from './components/shared/Register/Register';
import BookProduct from './components/BookProduct/BookProduct';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import About from './pages/About/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Pay from './pages/Dashboard/Pay/Pay';
import MyOrder from './pages/Dashboard/MyOrder/MyOrder';
import Review from './pages/Dashboard/Review/Review';
import AdminRoute from './components/AdminRoute/AdminRoute';
import ManageAllOrder from './pages/Dashboard/ManageAllOrder/ManageAllOrder';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageProduct from './pages/Dashboard/ManageProduct/ManageProduct';
import AddProduct from './pages/Dashboard/AddProduct/AddProduct';
import SingleBlogDetails from './pages/Home/Blogs/SingleBlogDetails/SingleBlogDetails';
// import useAuth from './hooks/useAuth';

function App() {
  // const { admin } = useAuth();
  // data aos
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, [])
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/allProducts" element={<AllProducts></AllProducts>}></Route>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}>
              {<Route path={`/dashboard/pay`} element={<Pay></Pay>}></Route>}
              <Route path={`/dashboard/myOrder`} element={<MyOrder></MyOrder>}></Route>
              <Route path={`/dashboard/review`} element={<Review></Review>}></Route>
              <Route path={`/dashboard/manageAllOrder`} element={<AdminRoute>
                <ManageAllOrder></ManageAllOrder>
              </AdminRoute>}>
              </Route>
              <Route path={`/dashboard/addProduct`} element={<AdminRoute>
                <AddProduct></AddProduct>
              </AdminRoute>}>
              </Route>
              <Route path={`/dashboard/makeAdmin`} element={<AdminRoute>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>}>
              </Route>
              <Route exact path={`/dashboard/manageProduct`} element={<AdminRoute>
                <ManageProduct></ManageProduct>
              </AdminRoute>}>
              </Route>
            </Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/blog/:id" element={<SingleBlogDetails></SingleBlogDetails>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/bookProduct/:id" element={<PrivateRoute>
              <BookProduct></BookProduct>
            </PrivateRoute>}>
            </Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
