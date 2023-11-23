import { createContext } from "react";

export const AuthContext = createContext({
	currentUser: null,
	userData: null,
	isLoading: false,
	invalidate: () => {},
});

export const AuthProvider = ({ children }) => {
	return (
		<AuthContext.Provider
			value={{
				currentUser,
				userData,
				isLoading,
				invalidate,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
