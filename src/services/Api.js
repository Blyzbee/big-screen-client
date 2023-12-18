import Axios from "./CallerService";

export const getAnswers = (participantId) => {
	return Axios.get("/answers/" + participantId);
};

export const getAllAnswers = () => {
	return Axios.get("/allAnswers");
};

export const getAnswersByUrl = (participantUrl) => {
	return Axios.get("/answersByUrl/" + participantUrl);
};

export const getParticipants = () => {
	return Axios.get("/participants");
};

export const getQuestions = () => {
	return Axios.get("/questions");
};

export const sendAnswers = (formData) => {
	return Axios.post("/answers/register", { formData });
};
