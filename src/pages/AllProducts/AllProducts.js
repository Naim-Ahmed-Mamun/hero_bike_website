import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/shared/Header/Header';
import './AllProducts.css';

const AllProducts = () => {
   // all products
   const [allProducts, setAllProducts] = useState([]);
   // spinner
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      fetch('https://vast-shelf-14740.herokuapp.com/allProducts')
         .then(res => res.json())
         .then(data => {
            setAllProducts(data);
            setLoading(false)
         })
   }, [])
   // console.log(allProducts);
   return (
      <>
         <Header></Header>
         <section className="all_products">
            <div className="container">
               <div className="sec_title mb-5" data-aos="fade-up">
                  <h2>All Products</h2>
               </div>
               <div className="row">
                  {
                     loading && <div className="text-center">
                        <Spinner className="text-center" animation="border" />
                     </div>
                  }
                  {
                     allProducts.map(product => {
                        return (
                           <div key={product._id} className="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
                              <Card>
                                 <div className="card_img">
                                    <Card.Img variant="top" src={product.image} />
                                    {/* <Card.Img variant="top" src={`data:image/png;base64,${product.image}`} /> */}
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

export default AllProducts;