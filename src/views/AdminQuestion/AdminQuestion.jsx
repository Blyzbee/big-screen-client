import React from "react";
import "./AdminQuestion.scss";
import Navbar from "../Navbar/Navbar";

const AdminQuestion = () => {
	if (!isLogged()) return <Navigate to="/admin" replace />;
	return (
		<div className="page-admin-question">
			<div className="page-area">
				<div>
					<h1>Espace | Questionnaires </h1>
				</div>

				<figure>{/* Ajoutez ici le contenu de la figure */}</figure>
			</div>
		</div>
	);
};

export default AdminQuestion;
