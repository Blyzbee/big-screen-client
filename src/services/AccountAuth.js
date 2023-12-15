import Axios from "./CallerService";

export const login = (token) => {
	console.log(token);
	return Axios.post("/login", token);
};

export const saveToken = (token) => {
	localStorage.setItem("token", token);
};

export const logout = () => {
	localStorage.removeItem("token");
};

export const isLogged = () => {
	let token = localStorage.getItem("token");
	return token;
};

export const getToken = () => {
	return localStorage.getItem("token");
};
