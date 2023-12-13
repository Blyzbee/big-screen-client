import React from "react";
import "./Admin.css";
import { Navigate } from "react-router-dom";
import { isLogged } from "../../services/AccountAuth";

const AdminHome = () => {
	if (!isLogged()) return <Navigate to="/admin" replace />;
	return (
		<div>
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
