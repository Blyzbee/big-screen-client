import { createContext, useState } from "react";

export const AuthContext = createContext({
	token: null,
	
	isLoading: false
});

export const AuthProvider = ({ children }) => {
	const [token, setToken] =  useState(null) ;
	return (
		<AuthContext.Provider
			value={{
				token,
				isLoading,
				setToken
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
