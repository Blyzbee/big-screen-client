import axios from "axios";
import { getToken, isLogged } from "./AccountAuth.js";

const Axios = axios.create({
	baseURL: "http://127.0.0.1:8000/api",
});

// Intercepteur pour le token
Axios.interceptors.request.use((request) => {
	if (isLogged()) {
		request.headers.Accept = "application/json";
		request.headers.Authorization = `Bearer ${getToken()}`;
	}

	return request;
});

export default Axios;
