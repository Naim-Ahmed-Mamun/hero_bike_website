import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import Header from '../shared/Header/Header';
import './BookProduct.css';
import Footer from '../shared/Footer/Footer';

const BookProduct = () => {
	// use form
	const { register, handleSubmit, reset } = useForm();
	// auth
	const { user } = useAuth();
	// use params
	const { id } = useParams();
	// book product state
	const [bookProduct, setBookProduct] = useState({});
	useEffect(() => {
		fetch(`https://vast-shelf-14740.herokuapp.com/product/${id}`)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setBookProduct(data)
			})
	}, [id])
	// form submit
	const onSubmit = data => {
		data.name = user?.displayName;
		data.email = user?.email;
		data.productImg = bookProduct?.imgUrl;
		data.productName = bookProduct?.productName;
		data.status = bookProduct?.status;
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
						title: 'Order Place Successfully Plz Check Dashboard',
					})
					reset()
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
							<div>
								<Card>
									<div className="product_img">
										<Card.Img variant="top" src={bookProduct?.imgUrl} />
									</div>
									<Card.Body>
										<Card.Title>{bookProduct?.productName}</Card.Title>
										<Card.Text>
											{bookProduct?.description}
										</Card.Text>
										{/* <Button className="regular_btn" variant="primary">Cancel Order</Button> */}
									</Card.Body>
								</Card>
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
										<input defaultValue={bookProduct?.productName} {...register("productName")} placeholder="productName" />
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