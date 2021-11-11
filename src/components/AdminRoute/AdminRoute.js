import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
	const { user,loading,admin } = useAuth();
	if(loading){
		<Spinner className="text-center" animation="border" />
	}
	return (
		<Route
			{...rest}
			render={({ location }) => user?.email && admin ? children
				: <Redirect
					to={{
						pathname: '/login',
						state: { from: location }
					}}
				/>
			}
		>

		</Route>
	);
};

export default AdminRoute;