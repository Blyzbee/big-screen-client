import React, { useState, useEffect } from "react";
import "./AdminAnswers.scss";
import { isLogged } from "../../services/AccountAuth";
import { Navigate } from "react-router-dom";
import { getAnswers } from "../../services/Api";

const AdminAnswers = () => {
	const [answers, setAnswers] = useState([]);
	const [participants, setParticipant] = useState([]);

	useEffect(() => {
		getAnswers()
			.then((res) => setAnswers(res.data.answers))
			.catch(() => alert("une erreur est survenue"));
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
					{participants.map((participant) => (
						<div key={participant.id}>
							<p>{participant.email}</p>
						</div>
					))}
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
