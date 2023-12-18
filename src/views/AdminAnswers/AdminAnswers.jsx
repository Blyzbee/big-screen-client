import React, { useState, useEffect } from "react";
import "./AdminAnswers.scss";
import { isLogged } from "../../services/AccountAuth";
import { Navigate } from "react-router-dom";
import { getAnswers, getParticipants } from "../../services/Api";
import Loading from "../../components/Loading/Loading";
import ParticipantAnswers from "../../components/ParticipantAnswers/ParticipantAnswers";

const AdminAnswers = () => {
	const [participants, setParticipants] = useState(null);
	const [selectedParticipant, setSelectedParticipant] = useState(null);
	const [answers, setAnswers] = useState(null);

	useEffect(() => {
		getParticipants()
			.then((res) => setParticipants(res.data.participants))
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
					{!participants && <Loading />}
					{participants &&
						participants.map((participant) => (
							<div
								key={participant.id}
								onClick={() => {
									if (selectedParticipant !== participant.id) {
										getAnswers(participant.id)
											.then((res) => {
												setAnswers(Object.values(res.data.answers));
												setSelectedParticipant(participant.id);
											})
											.catch(() => alert("une erreur est survenue"));
									} else setSelectedParticipant(null);
								}}
							>
								<h3>{participant.email}</h3>
								{participant.id === selectedParticipant && (
									<ParticipantAnswers answers={answers} />
								)}
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default AdminAnswers;
