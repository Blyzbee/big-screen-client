import React from "react";
import { Link } from "react-router-dom";
import './Home.scss'

function Home() {
	return (
		<div className="page-home">
			<h2>BigScreen vous accompage dans la réalisation de vos sondage</h2>
			<h2>
				Donnez nous votre avis :
			</h2>
			<hr />
			<div className="surveylist">
				<ul>
					<li>
						<Link to="/survey/1">Questionnaire 1 - 20 questions</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Home;
