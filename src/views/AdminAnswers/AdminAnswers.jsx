import React, { useState, useEffect } from "react";
import Axios from "../../services/CallerService";
import "./AdminAnswers.scss";
import { isLogged } from "../../services/AccountAuth";
import { Navigate } from "react-router-dom";

const AdminAnswers = () => {
	const [answers, setAnswers] = useState([]);

	const fetchData = async () => {
		try {
			const response = await Axios.get("/answers");
			console.log(response.data.answers);
			setAnswers(response.data.answers);
		} catch (error) {
			console.error("Erreur de requête API:", error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	if (!isLogged()) return <Navigate to="/admin" replace />;
	return (
		<div className="page-admin-answers">
			<div className="page-area">
				<div>
					<h1>
						Espace | <span>Réponses</span>
					</h1>
				</div>

				<div>
					{answers.map((answer) => (
						<div key={answer.id}>
							<h3>{answer.participant_id}</h3>
							<h3>
								{answer.question_id}/20 {answer.response}
							</h3>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AdminAnswers;
