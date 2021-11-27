import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import Header from '../shared/Header/Header';
import './BookProduct.css';
import Footer from '../shared/Footer/Footer';
import { Spinner } from 'react-bootstrap';

const BookProduct = () => {
	// use form
	const { register, handleSubmit, reset } = useForm();
	// auth
	const { user } = useAuth();
	// use params
	const { id } = useParams();
	// console.log(id);
	// history
	const navigate = useNavigate();
	// loading
	const [loading, setLoading] = useState(true);
	// book product state
	const [bookProduct, setBookProduct] = useState({});
	useEffect(() => {
		fetch(`https://vast-shelf-14740.herokuapp.com/product/${id}`)
			.then(res => res.json())
			.then(data => {
				// console.log(data);
				setBookProduct(data);
				setLoading(false);
			})
	}, [id])
	// form submit
	const onSubmit = data => {
		data.name = user?.displayName;
		data.email = user?.email;
		data.productImg = bookProduct?.image;
		data.productName = bookProduct?.name;
		data.status = bookProduct?.status;
		data.productId = id;
		fetch('https://vast-shelf-14740.herokuapp.com/orders', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(data => {
				if (data.acknowledged) {
					Swal.fire({
						type: 'success',
						title: 'Order Place Successfully',
					})
					reset()
					navigate('/dashboard/pay')
				}
				// console.log(data);
			})
		console.log(data)
	};

	return (
		<>
			<Header></Header>
			<div className="bookProduct">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							{
								loading && <div className="text-center">
									<Spinner className="text-center" animation="border" />
								</div>
							}
							<div>
								<img src={bookProduct?.image} alt="" />
								<h5>{bookProduct?.name}</h5>
								<div className="sec_title my-4">
									<h2>Details</h2>
								</div>
								<p className="details">{bookProduct?.details}</p>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="order_place">
								<div className="form_container">
									<h2 className="text-center mb-4">Order</h2>
									<form onSubmit={handleSubmit(onSubmit)}>
										<input defaultValue={user?.displayName} {...register("name")} placeholder="Name" />
										<input type="email" defaultValue={user?.email} {...register("email")} placeholder="Email" />
										<input {...register("city")} placeholder="City" />
										<input {...register("phone")} placeholder="Phone" />
										<input defaultValue={bookProduct?.name} {...register("productName")} placeholder="productName" />
										<input type="submit" value="Place Order" />
									</form>
								</div>
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