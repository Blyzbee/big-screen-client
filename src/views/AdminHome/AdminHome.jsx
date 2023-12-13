import React from "react";
import "./AdminHome.scss";
import { Navigate } from "react-router-dom";
import { isLogged } from "../../services/AccountAuth";

const AdminHome = () => {
	if (!isLogged()) return <Navigate to="/admin" replace />;
	return (
		<div className="page-admin-home">
			<div className="page-area">
				<div>
					<h1>Bienvenue dans votre espace administrateur</h1>
				</div>

				<figure>{/* Ajoutez ici le contenu de la figure */}</figure>
			</div>
		</div>
	);
};

export default AdminHome;
