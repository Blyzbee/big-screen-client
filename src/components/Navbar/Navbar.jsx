import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import { logout } from "../../services/AccountAuth";

const Navbar = () => {
	const token = localStorage.getItem("token");
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<nav>
			{isNavOpen && (
				<div
					className="blured-background phone-only"
					onClick={() => setIsNavOpen(false)}
				></div>
			)}
			<img src={Logo} alt="logo Big Screen" />
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
				{token ? (
					<Button onClick={() => logout()}>
						Deconnexion <Icon name="logout" mx />
					</Button>
				) : (
					<Button>
						<Link to="/admin">
							Connexion <Icon name="login" mx />
						</Link>
					</Button>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
