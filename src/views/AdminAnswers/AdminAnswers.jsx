import React from "react";
import "./AdminAnswers.scss";

const AdminAnswers = () => {
	if (!isLogged()) return <Navigate to="/admin" replace />;
	return (
		<div className="page-admin-answers">
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
