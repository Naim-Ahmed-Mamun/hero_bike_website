import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
	let location = useLocation();
	const { user, loading } = useAuth();
	if(loading){
		return (
			<Spinner className="text-center" animation="border" />
		)
	}
	else if(user.email){
		return children
	}
	else{
		return <Navigate to="/login" state={{ from: location }} />
	}
	
};

export default PrivateRoute;