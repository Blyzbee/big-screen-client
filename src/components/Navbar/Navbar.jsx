import React from "react";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
	return (
		<nav>
			<img src={Logo} alt="logo Big Screen" />
			<button onClick={() => console.log("ok")}>Deconnexion</button>
		</nav>
	);
};

export default Navbar;
