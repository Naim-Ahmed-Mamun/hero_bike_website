import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Header from '../../components/shared/Header/Header';
import './AllProducts.css';

const AllProducts = () => {
   const [allProducts, setAllProducts] = useState([]);
   useEffect(() => {
      fetch('http://localhost:5000/allProducts')
         .then(res => res.json())
         .then(data => setAllProducts(data))
   }, [])
   // console.log(allProducts);
   return (
      <>
      <Header></Header>
         <section className="all_products">
            <div className="container">
               <div className="sec_title mb-5">
                  <h2>ALl Products</h2>
               </div>
               <div className="row">
                  {
                     allProducts.map(product => {
                        return (
                           <div key={product._id} className="col-lg-4 mb-4">
                              <Card>
                                 <div className="card_img">
                                    <Card.Img variant="top" src={product?.imgUrl} />
                                    <h5 className="price">${product?.price}</h5>
                                 </div>
                                 <Card.Body className="card_text">
                                    <Card.Title>{product?.productName}</Card.Title>
                                    <Card.Text>
                                       {product?.description.slice(1, 80)}....
                                    </Card.Text>
                                    <Button className="regular_btn">Book Now</Button>
                                 </Card.Body>
                              </Card>
                           </div>
                        )
                     })
                  }
               </div>
            </div>
         </section>
      </>
   );
};

export default AllProducts;