import React from "react";
import "./Admin.css";

const AdminAnswers = () => {
	if (!isLogged()) return <Navigate to="/admin" replace />;
	return (
		<div>
			<div className="page-area">
				<div>
					<h1>Espace | Réponses</h1>
				</div>

				<figure>{/* Ajoutez ici le contenu de la figure */}</figure>
			</div>
		</div>
	);
};

export default AdminAnswers;
