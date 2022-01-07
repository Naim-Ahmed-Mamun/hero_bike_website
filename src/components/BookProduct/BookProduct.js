import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
import { Link, useParams} from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
// import Swal from 'sweetalert2';
import Header from '../shared/Header/Header';
import './BookProduct.css';
import Footer from '../shared/Footer/Footer';
import { Spinner } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const BookProduct = () => {
	// use params
	const { id } = useParams();
	// console.log(id);

	// loading
	const [loading, setLoading] = useState(true);
	// book product state
	// const [bookProduct, setBookProduct] = useState({});
	const {singleProduct,setSingleProduct} = useContext(AuthContext);
	useEffect(() => {
		fetch(`https://vast-shelf-14740.herokuapp.com/product/${id}`)
			.then(res => res.json())
			.then(data => {
				// console.log(data);
				setSingleProduct(data);
				setLoading(false);
			})
	}, [id,setSingleProduct])
	

	return (
		<>
			<Header></Header>
			<div className="bookProduct">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-8 mx-auto">
							{
								loading && <div className="text-center">
									<Spinner className="text-center" animation="border" />
								</div>
							}
							<div>
								<div className='place_order_btn'>
									<Link to="/dashboard/pay"><button className='regular_btn'>Place Order</button></Link>
								</div>
								<img src={singleProduct?.image} alt="" />
								<h5>{singleProduct?.name}</h5>
								<div className="sec_title my-4">
									<h2>Details</h2>
								</div>
								<p className="details">{singleProduct?.details}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</>
	);
};

export default BookProduct;