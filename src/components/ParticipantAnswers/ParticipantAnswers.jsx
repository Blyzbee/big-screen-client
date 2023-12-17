import React, { useEffect, useState } from "react";
import { getQuestions } from "../../services/Api";
import Loading from "../Loading/Loading";

const ParticipantAnswers = ({ answers }) => {
	const [questions, setQuestions] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		getQuestions()
			.then((res) => {
				setQuestions(res.data.questions);
				setLoading(false);
			})
			.catch(() => {
				setLoading(false);
			});
	}, []);

	if (!loading && !answers)
		return <div>Cette réponse au questionnaire n'existe pas</div>;
	return (
		<div className="cardbase">
			{!answers || (!questions && <Loading />)}
			{answers &&
				questions &&
				answers.map((answer) => (
					<div key={answer.id}>
						<b>
							{
								questions.find((question) => question.id === answer.question_id)
									.body
							}
						</b>
						<br />
						<span>{answer.response}</span>
					</div>
				))}
		</div>
	);
};

export default ParticipantAnswers;
