import React from "react";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div>
			<h2>
				Donnez nous votre avis sur nos produits grâce aux questionnaires de
				satisfaction :
			</h2>
			<hr />
			<div>
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
