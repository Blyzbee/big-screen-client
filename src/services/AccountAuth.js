import Axios from "./CallerService"

let login = (token) => {
    return Axios.post('/api/login', token)
}


let saveToken = (token) => {
    localStorage.setItem('token', token)
}

let logout = () => {
    localStorage.removeItem('token')
}

let isLogged = () => {
    let token = localStorage.getItem('token')
    return token
}


let getToken = () => {
    return localStorage.getItem('token')
}


export const AccountAuth = {
    login, saveToken, logout, isLogged, getToken
}