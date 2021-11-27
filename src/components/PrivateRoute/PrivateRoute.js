import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
	let location = useLocation();
	const { user } = useAuth();
	if(!user?.email){
		return (
			<Spinner className="text-center" animation="border" />
		)
	}
	if(user.email){
		return children
	}
	return <Navigate to="/login" state={{ from: location }} />
	
};

export default PrivateRoute;