import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './Products.css';

const Products = () => {
   const [products, setProducts] = useState([])
   useEffect(() => {
      fetch('http://localhost:5000/products')
         .then(res => res.json())
         .then(data => {
            console.log(data);
            setProducts(data)
         })
   }, [])
   return (
      <>
         <section className="products">
            <div className="container">
               <div className="sec_title mb-4">
                  <h2>New Products</h2>
               </div>
               <div className="row">
                  {
                     products.map(product => {
                        return (
                           <div className="col-lg-4 mb-4">
                              <Card key={product?._id}>
                                 <div className="card_img">
                                    <Card.Img variant="top" src={product?.imgUrl} />
                                    <h5 className="price">${product?.price}</h5>
                                 </div>
                                 <Card.Body className="card_text">
                                    <Card.Title>{product?.productName}</Card.Title>
                                    <Card.Text>
                                       {product?.description.slice(1,80)}....
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

export default Products;