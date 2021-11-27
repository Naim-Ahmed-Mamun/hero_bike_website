import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
	const { user,loading,admin } = useAuth();
	let location = useLocation();
	if(loading){
		<Spinner className="text-center" animation="border" />
	}
	if(user?.email && admin){
		return children
	}
	return <Navigate to="/login" state={{ from: location }} />
};

export default AdminRoute;