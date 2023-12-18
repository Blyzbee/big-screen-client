import React, { useEffect, useState } from "react";
import ParticipantAnswers from "../../components/ParticipantAnswers/ParticipantAnswers";
import { useLocation } from "react-router-dom";
import { getAnswersByUrl } from "../../services/Api";

const ParticipantAnswersView = () => {
	const participantUrl = useLocation().pathname.split("/")[2];
	const [answers, setAnswers] = useState(null);

	useEffect(() => {
		getAnswersByUrl(participantUrl).then((res) => {
			setAnswers(Object.values(res.data.answers));
		});
	}, []);

	return <ParticipantAnswers answers={answers} />;
};

export default ParticipantAnswersView;
