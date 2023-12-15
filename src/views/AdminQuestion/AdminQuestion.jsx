import React, { useEffect, useState, useRef } from "react";
import "./AdminQuestion.scss";
import Navbar from "../Navbar/Navbar";
import Axios from "../../services/CallerService";
import { isLogged } from "../../services/AccountAuth";
import { Navigate } from "react-router-dom";

const AdminQuestion = () => {
	const [questions, setQuestions] = useState([]);
	const flag = useRef(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (!flag.current) {
					const response = await Axios.get(
						"http://127.0.0.1:8000/api/questions"
					);
					console.log(response.data.questions);
					setQuestions(response.data.questions);
					flag.current = true;
				}
			} catch (error) {
				console.error("Erreur de requête API:", error);
			}
		};

		fetchData();

		return () => {
			flag.current = false;
		};
	}, []);

	if (!isLogged()) return <Navigate to="/admin" replace />;
	return (
		<div className="page-admin-question">
			<Navbar />
			<div className="page-area">
				<div>
					<h1>
						Espace | <span>Questionnaires</span>
					</h1>
				</div>

				<div>
					{questions.map((question) => (
						<div className="questionAdmin" key={question.id}>
							<p>
								<span>{question.title}</span> | {question.body}{" "}
							</p>

							<div className="choices">
								<p>{question.type}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AdminQuestion;
