import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import "./navbar.scss";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { isLogged, logout } from "../../services/AccountAuth";

const Navbar = () => {
	const token = localStorage.getItem("token");
	const [isNavOpen, setIsNavOpen] = useState(false);
	const navigate = useNavigate();

	if (!isLogged()) return <Navigate to="/admin" replace />;
	return (
		<nav>
			{isNavOpen && (
				<div
					className="blured-background phone-only"
					onClick={() => setIsNavOpen(false)}
				></div>
			)}
			<img
				src={Logo}
				alt="logo Big Screen"
				onClick={() => {
					if (token) navigate("/admin/home");
					else navigate("/");
				}}
			/>
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
							<NavLink
								onClick={() => setIsNavOpen(false)}
								to="/admin/home"
								activeClassName="active-link"
							>
								Accueil
							</NavLink>
						</li>
						<li>
							<NavLink
								onClick={() => setIsNavOpen(false)}
								to="/admin/questions"
								activeClassName="active-link"
							>
								Questionnaires
							</NavLink>
						</li>
						<li>
							<NavLink
								onClick={() => setIsNavOpen(false)}
								to="/admin/answers"
								activeClassName="active-link"
							>
								Réponses
							</NavLink>
						</li>
					</ul>
				)}
				{token ? (
					<Button onClick={() => logout()}>
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
