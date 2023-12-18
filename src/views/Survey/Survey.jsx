import React, { useEffect, useState } from "react";
import "./survey.scss";
import Button from "../../components/Button/Button";
import { getQuestions, sendAnswers } from "../../services/Api";
import Loading from "../../components/Loading/Loading";

const Survey = () => {
	const [formData, setFormData] = useState({});
	const [step, setStep] = useState(1);
	const [screenWidth, setscreenWidth] = useState(0);
	const [errorMsg, setErrorMsg] = useState("");
	const [questions, setQuestions] = useState(null);

	const handleChange = (id, value) => {
		setFormData({ ...formData, [id]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrorMsg("");
		console.log(formData);
		if (!formData[step]) {
			setErrorMsg("veuillez remplir le champ");
			return;
		}
		if (step < 20 && screenWidth < 1120) {
			setStep(step + 1);
			return;
		}

		sendAnswers(formData)
			.then((res) =>
				alert(
					`Votre réponse à bien été enregistrée. Voici votre lien pour consulter vos réponse: ${
						import.meta.env.VITE_BASE_URL
					}answers/${res.data.url}`
				)
			)
			.catch((err) => alert("Une erreur est survenue."));
	};

	// check phone or desktop screen
	useEffect(() => {
		setscreenWidth(window.innerWidth);
		const handleResize = () => {
			setscreenWidth(window.innerWidth);
			if (window.innerWidth > 1120) setStep(1);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		getQuestions()
			.then((res) => {
				console.log(res.data.questions);
				setQuestions(res.data.questions);
			})
			.catch((err) => {
				console.log(err);
				alert("une erreur est survenue");
			});
	}, []);

	if (!questions) return <Loading />;
	return (
		<form className="survey" onSubmit={handleSubmit}>
			<div className="carousel">
				<div style={{ marginLeft: `${-100 * (step - 1)}dvw` }}>
					{questions &&
						questions.map((question) => (
							<div key={question.id}>
								<label>{`Question ${question.id}/20: ${question.body}`}</label>
								{question.type === "A" && (
									<select
										onChange={(e) => handleChange(question.id, e.target.value)}
									>
										<option value="">Sélectionnez une option</option>
										{JSON.parse(question.choices).map((option, index) => (
											<option key={index} value={option}>
												{option}
											</option>
										))}
									</select>
								)}
								{question.type === "B" && (
									<input
										type="text"
										onChange={(e) => handleChange(question.id, e.target.value)}
										maxLength={255}
									/>
								)}
								{question.type === "C" && (
									<input
										type="number"
										onChange={(e) => handleChange(question.id, e.target.value)}
										min={1}
										max={5}
									/>
								)}
							</div>
						))}
				</div>
			</div>
			<div className="submit-button">
				{errorMsg && <span className="text-error">{errorMsg}</span>}
				{step >= 20 || screenWidth > 1120 ? (
					<Button type="submit">Valider le formulaire</Button>
				) : (
					<Button type="submit">Suivant</Button>
				)}
			</div>
		</form>
	);
};

export default Survey;
