import React from "react";
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/Logo.png";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import "./navbar.scss";
import {AccountAuth} from "../../services/AccountAuth"

const Navbar = () => {
	const token = localStorage.getItem("token");
	const navigate = useNavigate(); 


	const logout = () => {
		AccountAuth.logout()
		.then((res) => {console.log(res);
		navigate('/admin');
		})
		
		.catch((error) => {
		console.error('Logout error:', error);
		});
	};

	return (
		<nav>
			<img src={Logo} alt="logo Big Screen" />
			{token ? (
				<Button onClick={logout}>
					Deconnexion <Icon name="logout" mx />
				</Button>
			) : (
				<Button>
					Connexion <Icon name="login" mx />
				</Button>
			)}
		</nav>
	);
};


export default Navbar;
