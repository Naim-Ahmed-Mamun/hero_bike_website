import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
   // product state
   const [products, setProducts] = useState([]);
   // spinner
   const [loading, setLoading] = useState(true)
   useEffect(() => {
      fetch('https://vast-shelf-14740.herokuapp.com/products')
         .then(res => res.json())
         .then(data => {
            // console.log(data);
            setProducts(data);
            setLoading(false)
         })
   }, []);
   return (
      <>
         <section className="products">
            <div className="container">
               <div className="sec_title mb-4" data-aos="fade-up">
                  <h2>New Products</h2>
               </div>
               <div className="row">
                  {
                     loading && <div className="text-center">
                        <Spinner className="text-center" animation="border" />
                     </div>
                  }
                  {
                     products.map(product => {
                        return (
                           <div key={product?._id} className="col-lg-4 col-md-6 col-sm-12 mb-4" data-aos="fade-up">
                              <Card>
                                 <div className="card_img">
                                    <Card.Img className="img-fluid" variant="top" src={product?.image} />
                                    <h5 className="price">${product?.price}</h5>
                                 </div>
                                 <Card.Body className="card_text">
                                    <Card.Title>{product?.name}</Card.Title>
                                    <Card.Text>
                                       {product?.details.slice(1, 80)}....
                                    </Card.Text>
                                    <Link to={`/bookProduct/${product._id}`}>
                                       <Button className="regular_btn">Book Now</Button>
                                    </Link>
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