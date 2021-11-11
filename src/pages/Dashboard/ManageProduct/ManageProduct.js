import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2';


const ManageProduct = () => {
   // manage products state
   const [manageAllProducts, setManageAllProducts] = useState([]);
   // loading
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      fetch('https://vast-shelf-14740.herokuapp.com/manageAllProducts')
         .then(res => res.json())
         .then(data => {
            setManageAllProducts(data);
            setLoading(false)
         })
   }, []);

   // handleProductDelete
   const handleProductDelete = id => {
      const proceed = window.confirm('Are you sure delete this product')
      if (proceed) {
         fetch(`https://vast-shelf-14740.herokuapp.com/deleteProduct/${id}`, {
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
               }
               const remaining = manageAllProducts.filter(product => product._id !== id)
               setManageAllProducts(remaining)
            })
      }
   }
   return (
      <>
         <h3 className="text-center my-5 text-danger"> Manage Products </h3>
         <div className="container">
            <div className="row">
               {
                  loading && <div className="text-center">
                     <Spinner className="text-center" animation="border" />
                  </div>
               }
               {
                  manageAllProducts.map(product => {
                     return (
                        <div key={product._id} className="col-lg-6 mb-4">
                           <Card>
                              <div className="card_img">
                                 <Card.Img variant="top" src={product?.imgUrl} />
                              </div>
                              <Card.Body className="card_text">
                                 <Card.Title>{product?.productName}</Card.Title>
                                 <Button onClick={() => handleProductDelete(product._id)}
                                    className="regular_btn">Delete Product</Button>
                              </Card.Body>
                           </Card>
                        </div>
                     )
                  })
               }
            </div>
         </div>
      </>
   );
};

export default ManageProduct;