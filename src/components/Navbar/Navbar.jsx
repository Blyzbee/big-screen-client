import React from "react";
import Logo from "../../assets/Logo.png";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import "./navbar.scss";

const Navbar = () => {
	const token = localStorage.getItem("token");

	return (
		<nav>
			<img src={Logo} alt="logo Big Screen" />
			{token ? (
				<Button>
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
