import axios from "axios";
import { AccountAuth } from "./AccountAuth.js";

    const Axios = axios.create({
        baseURL : 'http://127.0.0.1:8000/'
    })

    // Intercepteur pour le token
    Axios.interceptors.request.use(request => {
        if (AccountAuth.isLogged()){
            request.headers.Accept = "application/json"
            request.headers.Authorization = `Bearer ${AccountAuth.getToken()}`
        }
        
        return request
    })

export default Axios ;