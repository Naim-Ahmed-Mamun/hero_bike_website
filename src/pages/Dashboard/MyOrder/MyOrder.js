import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './MyOrder.css';
import Swal from 'sweetalert2';
import { Spinner } from 'react-bootstrap';


const MyOrder = () => {
   // my order state
   const [myOrder, setMyOrder] = useState([]);
   // loading
   const [loading, setLoading] = useState(true);
   // auth
   const { user } = useAuth();
   // user email
   const userEmail = user?.email;
   useEffect(() => {
      fetch(`https://vast-shelf-14740.herokuapp.com/myOrder/${userEmail}`)
         .then(res => res.json())
         .then(data => {
            console.log(data);
            setMyOrder(data)
            setLoading(false)
         })
   }, [userEmail]);
   // handleDelete
   const handleDelete = (id) => {
      const proceed = window.confirm('Are you sure delete this product ? ')
      if (proceed) {
         fetch(`https://vast-shelf-14740.herokuapp.com/deleteOrder/${id}`, {
            method: 'DELETE'
         })
            .then(res => res.json())
            .then(data => {
               console.log(data);
               if (data.deletedCount) {
                  Swal.fire({
                     type: 'success',
                     title: 'Delete Successfully',
                  })
                  const remaining = myOrder.filter(order => order._id !== id);
                  setMyOrder(remaining)
               }
            })
      }
   }
   return (
      <>
         <div>
            <h3 className="text-center my-5 text-danger" data-aos="fade-up">My Order</h3>
            <div className="container">
               <div className="row">
                  {
                     loading && <div className="text-center">
                        <Spinner className="text-center" animation="border" />
                     </div>
                  }
                  {
                     myOrder.map(order => {
                        return (
                           <div key={order._id} className="col-lg-6" data-aos="fade-up">
                              <div className="card product_card mb-3">
                                 <div className="row g-0">
                                    <div className="col-md-4 order_img">
                                       <img src={order?.productImg} className="img-fluid rounded-start" alt="..." />
                                       <span className="status">{order.status}</span>
                                    </div>
                                    <div className="col-md-8">
                                       <div className="card-body">
                                          <h5 className="card-title">{order?.productName}</h5>
                                          <button onClick={() => handleDelete(order._id)} className="btn btn-danger cancel">Cancel</button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        )
                     })
                  }
               </div>
            </div>
         </div>
      </>
   );
};

export default MyOrder;