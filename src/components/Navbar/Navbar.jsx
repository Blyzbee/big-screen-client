import React from "react";
import Logo from "../../assets/Logo.png";
import Button from "../Button/Button";

const Navbar = () => {
	return (
		<nav>
			<img src={Logo} alt="logo Big Screen" />
			<Button>Deconnexion</Button>
		</nav>
	);
};


export default Navbar;
