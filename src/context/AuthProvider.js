import React, { createContext } from 'react';
import { useState } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
	// const allContext = useFirebase();
	const [singleProduct,setSingleProduct] = useState({});
	const value = {
		allContext:useFirebase(),
		singleProduct,
		setSingleProduct,
	}
	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;