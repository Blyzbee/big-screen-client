import Axios from "./CallerService";

export const getAnswers = () => {
	return Axios.get("/answers");
};

export const getQuestions = () => {
	return Axios.get("/questions");
};

export const sendAnswers = () => {
	return Axios.post("/answers/register");
};