import React, { useState } from "react";
// import Logo from "../../assets/Logo.png";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import "./navbar.scss";
import { NavLink, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { logout } from "../../services/AccountAuth";

const Navbar = () => {
	const token = localStorage.getItem("token");
	const [isNavOpen, setIsNavOpen] = useState(false);
	const navigate = useNavigate();

	return (
		<nav>
			{isNavOpen && (
				<div
					className="blured-background phone-only"
					onClick={() => setIsNavOpen(false)}
				></div>
			)}
			{/* <img
				src={Logo}
				alt="logo Big Screen"
				onClick={() => {
					if (token) navigate("/admin/home");
					else navigate("/");
				}}
			/> */}

			<div 	
				onClick={() => {
				if (token) navigate("/admin/home");
				else navigate("/");
			}}>

				<h1>BIGSCREEN</h1>
			</div>


			<Icon
				className="phone-only"
				name="menu"
				onClick={() => setIsNavOpen(!isNavOpen)}
			/>
			<div className={clsx("wrapper", isNavOpen && "display-nav")}>
				<Icon
					className="phone-only"
					name="close"
					onClick={() => setIsNavOpen(false)}
				/>
				{token && (
					<ul>
						<li>
							<NavLink onClick={() => setIsNavOpen(false)} to="/admin/home">
								Accueil
							</NavLink>
						</li>
						<li>
							<NavLink
								onClick={() => setIsNavOpen(false)}
								to="/admin/questions"
							>
								Questionnaires
							</NavLink>
						</li>
						<li>
							<NavLink onClick={() => setIsNavOpen(false)} to="/admin/answers">
								Réponses
							</NavLink>
						</li>
					</ul>
				)}
				{token ? (
					<Button
						onClick={() => {
							logout();
							navigate("/admin");
						}}
					>
						Deconnexion <Icon name="logout" mx />
					</Button>
				) : (
					<Button onClick={() => navigate("/admin")}>
						Connexion <Icon name="login" mx />
					</Button>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
