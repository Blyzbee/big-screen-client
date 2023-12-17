import React, { useEffect, useState } from "react";
import "./AdminQuestion.scss";
import { isLogged } from "../../services/AccountAuth";
import { Navigate } from "react-router-dom";
import { getQuestions } from "../../services/Api";
import Loading from "../../components/Loading/Loading";

const AdminQuestion = () => {
	const [questions, setQuestions] = useState(null);

	useEffect(() => {
		getQuestions()
			.then((res) => {
				setQuestions(res.data.questions);
			})
			.catch((err) => console.log(err));
	}, []);

	if (!isLogged()) return <Navigate to="/admin" replace />;
	return (
		<div className="page-admin-question">
			<div className="page-area">
				<div>
					<h1>
						Espace | <span>Questionnaires</span>
					</h1>
				</div>

				<div>
					{!questions && <Loading />}
					{questions &&
						questions.map((question) => (
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
