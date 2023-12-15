import React, { useEffect, useState } from "react";
import "./survey.scss";
import Button from "../../components/Button/Button";
import Axios from "../../services/CallerService";

const questions = [
	{ id: 1, text: "Votre adresse mail", type: "B" },
	{ id: 2, text: "Votre âge", type: "B" },
	{
		id: 3,
		text: "Votre sexe",
		type: "A",
		options: ["Homme", "Femme", "Préfère ne pas répondre"],
	},
	{
		id: 4,
		text: "Nombre de personne dans votre foyer (adulte & enfants)",
		type: "C",
	},
	{ id: 5, text: "Votre profession", type: "B" },
	{
		id: 6,
		text: "Quel marque de casque VR utilisez-vous ?",
		type: "A",
		options: [
			"Oculus Quest",
			"Oculus Rift/s",
			"HTC Vive",
			"Windows Mixed Reality",
			"Valve index",
		],
	},
	{
		id: 7,
		text: "Sur quel magasin d’application achetez vous des contenus VR ?",
		type: "A",
		options: ["SteamVR", "Occulus store", "Viveport", "Windows store"],
	},
	{
		id: 8,
		text: "Quel casque envisagez-vous d’acheter dans un futur proche ?",
		type: "A",
		options: [
			"Occulus Quest",
			"Occulus Go",
			"HTC Vive Pro",
			"PSVR",
			"Autre",
			"Aucun",
		],
	},
	{
		id: 9,
		text: "Au sein de votre foyer, combien de personnes utilisent votre casque VR pour regarder Bigscreen ?",
		type: "C",
	},
	{
		id: 10,
		text: "Vous utilisez principalement Bigscreen pour :",
		type: "A",
		options: [
			"regarder la TV en direct",
			"regarder des films",
			"travailler",
			"jouer en solo",
			"jouer en équipe",
		],
	},
	{
		id: 11,
		text: "Combien donnez-vous de points pour la qualité de l’image sur Bigscreen ?",
		type: "C",
	},
	{
		id: 12,
		text: "Combien donnez-vous de points pour le confort d’utilisation de l’interface Bigscreen ?",
		type: "C",
	},
	{
		id: 13,
		text: "Combien donnez-vous de points pour la connexion réseau de Bigscreen ?",
		type: "C",
	},
	{
		id: 14,
		text: "Combien donnez-vous de points pour la qualité des graphismes 3D dans Bigscreen ?",
		type: "C",
	},
	{
		id: 15,
		text: "Combien donnez-vous de points pour la qualité audio dans Bigscreen ?",
		type: "C",
	},
	{
		id: 16,
		text: "Aimeriez-vous avoir des notifications plus précises au cours de vos sessions Bigscreen ?",
		type: "A",
		options: ["Oui", "Non"],
	},
	{
		id: 17,
		text: "Aimeriez-vous pouvoir inviter un ami à rejoindre votre session via son smartphone ?",
		type: "A",
		options: ["Oui", "Non"],
	},
	{
		id: 18,
		text: "Aimeriez-vous pouvoir enregistrer des émissions TV pour pouvoir les regarder ultérieurement ?",
		type: "C",
	},
	{
		id: 19,
		text: "Aimeriez-vous jouer à des jeux exclusifs sur votre Bigscreen ?",
		type: "C",
	},
	{
		id: 20,
		text: "Quelle nouvelle fonctionnalité devrait exister sur Bigscreen ?",
		type: "B",
	},
];

const Survey = () => {
	const [formData, setFormData] = useState({});
	const [step, setStep] = useState(1);
	const [screenWidth, setscreenWidth] = useState(0);
	const [errorMsg, setErrorMsg] = useState("");

	const handleChange = (id, value) => {
		setFormData({ ...formData, [id]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrorMsg("");
		console.log("Données soumises:", formData);
		if (!formData[step]) {
			setErrorMsg("veuillez remplir le champ");
			return;
		}
		if (step < 20) {
			setStep(step + 1);
		} else {
			const url = crypto.randomUUID();
			console.log("send responses");
		}
	};

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
		Axios.get("/surveys")
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	}, []);

	return (
		<form className="survey" onSubmit={handleSubmit}>
			<div className="carousel">
				<div style={{ marginLeft: `${-100 * (step - 1)}dvw` }}>
					{questions.map((question) => (
						<div key={question.id}>
							<label>{`Question ${question.id}/20: ${question.text}`}</label>
							{question.type === "A" && (
								<select
									onChange={(e) => handleChange(question.id, e.target.value)}
								>
									<option value="">Sélectionnez une option</option>
									{question.options.map((option, index) => (
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
									type="range"
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
