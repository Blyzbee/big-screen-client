import React, { useEffect, useState } from "react";
import GraphPie from "../../components/Graphs/GraphPie";
import GraphBar from "../../components/Graphs/GraphBar";
import "./AdminHome.scss";
import { Navigate } from "react-router-dom";
import { isLogged } from "../../services/AccountAuth";
import Loading from "../../components/Loading/Loading";
import { getAllAnswers, getQuestions } from "../../services/Api";

const AdminHome = () => {
	const [allAnswers, setAllAnswers] = useState(null);
	const [questions, setQuestion] = useState(null);

	useEffect(() => {
		getAllAnswers()
			.then((res) => {
				console.log(res.data.answers);
				setAllAnswers(res.data.answers);
			})
			.catch((err) => console.log(err));
		getQuestions()
			.then((res) => {
				console.log(res.data.questions);
				setQuestion(res.data.questions);
			})
			.catch((err) => console.log(err));
	}, []);

	if (!isLogged()) return <Navigate to="/admin" replace />;
	return (
		<div className="page-admin-home">
			<div className="page-area">
				<div>
					<h1>Bienvenue dans votre espace administrateur</h1>
				</div>

				<div className="graphs-area">
					{!allAnswers || (!questions && <Loading />)}
					{allAnswers &&
						questions &&
						questions
							.filter((question) => question.type !== "B")
							.sort((a, b) => a.title - b.title)
							.map((question) => (
								<div key={question.id}>
									<h4>
										{question.title} - {question.body}
									</h4>
									{question.type === "A" && (
										<GraphPie
											data={allAnswers.filter(
												(answer) => answer.question_id === question.id
											)}
										/>
									)}
									{question.type === "C" && (
										<GraphBar
											data={allAnswers.filter(
												(answer) => answer.question_id === question.id
											)}
										/>
									)}
								</div>
							))}
				</div>
			</div>
		</div>
	);
};

export default AdminHome;
