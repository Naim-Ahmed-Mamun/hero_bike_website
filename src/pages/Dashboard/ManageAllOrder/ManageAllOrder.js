import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2';

const ManageAllOrder = () => {
   // all order state
   const [allOrders, setAllOrders] = useState([]);
   // update
   const [update, setUpdate] = useState(false);
   // loading
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      fetch('https://vast-shelf-14740.herokuapp.com/allOrders')
         .then(res => res.json())
         .then(data => {
            // console.log(data);
            setAllOrders(data);
            setLoading(false);
         })
   }, [update]);
   // handleDelete
   const handleDelete = id => {
      const proceed = window.confirm('Are you sure delete this order')
      if (proceed) {
         fetch(`https://vast-shelf-14740.herokuapp.com/orderDelete/${id}`, {
            method: 'DELETE'
         })
            .then(res => res.json())
            .then(data => {
               // console.log(data);
               if (data.deletedCount) {
                  Swal.fire({
                     type: 'success',
                     title: 'Delete Successfully',
                  })
                  const remaining = allOrders.filter(order => order._id !== id)
                  setAllOrders(remaining)
               }
            })
      }
   }
   // handleUpdate
   const handleUpdate = id => {
      fetch(`https://vast-shelf-14740.herokuapp.com/updateOrder/${id}`, {
         method: 'PUT'
      })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if (data.modifiedCount) {
               Swal.fire({
                  type: 'success',
                  title: 'Update Successfully',
               })
            }
            setUpdate(true)
         })
   }
   return (
      <>
         <h3 className="text-center my-5 text-danger" data-aos="fade-up"> Manage All Order </h3>
         <div className="container">
            <div className="row">
               {
                  loading && <div className="text-center">
                     <Spinner className="text-center" animation="border" />
                  </div>
               }
               {
                  allOrders.map(order => {
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
                                       <h5 className="card-title product_title">{order?.productName}</h5>

                                       <button onClick={() => handleDelete(order._id)}
                                          className="btn btn-danger cancel">Delete</button>

                                       <button style={{ position: 'absolute', bottom: '10px', right: '100px' }}
                                          onClick={() => handleUpdate(order._id)}
                                          className="btn btn-success update">update</button>
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
      </>
   );
};

export default ManageAllOrder;