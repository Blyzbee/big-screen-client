import React, { useEffect, useState } from "react";
import GraphPie from "../../components/Graphs/GraphPie";
// import GraphRadar from "../../components/Graphs/GraphRadar";
import "./AdminHome.scss";
import { Navigate } from "react-router-dom";
import { isLogged } from "../../services/AccountAuth";
// import Loading from "../../components/Loading/Loading";
import { getAnswersCount } from "../../services/Api";
import GraphRadar from "../../components/Graphs/GraphRadar";

const AdminHome = () => {
  const [answersSix, setAnswersSixCount] = useState(null);
  const [answersSept, setAnswersSeptCount] = useState(null);
  const [answersX, setAnswersXCount] = useState(null);

  const [answersXi, setAnswersXiCount] = useState(null);
  const [answersXii, setAnswersXiiCount] = useState(null);
  const [answersXiii, setAnswersXiiiCount] = useState(null);
  const [answersXiv, setAnswersXivCount] = useState(null);
  const [answersXv, setAnswersXvCount] = useState(null);


  useEffect(() => {

	function fetchAnswersCount () {
		// const questionId = [6]; // Ajoutez les IDs de questions que vous souhaitez interroger


		
		getAnswersCount(6)
		.then((res) => {
			console.log(res.data);
			setAnswersSixCount(Object.values(res.data.response_counts));
		
		})

		getAnswersCount(7)
		.then((res) => {
			console.log(res);
			setAnswersSeptCount(Object.values(res.data.response_counts));
		
		})

		getAnswersCount(10)
		.then((res) => {
			console.log(res);
			setAnswersXCount(Object.values(res.data.response_counts));
		
		})

		getAnswersCount(11)
		.then((res) => {
			console.log(res);
			setAnswersXiCount(Object.values(res.data.response_counts));
		
		})

		getAnswersCount(12)
		.then((res) => {
			console.log(res);
			setAnswersXiiCount(Object.values(res.data.response_counts));
		
		})

		getAnswersCount(13)
		.then((res) => {
			console.log(res);
			setAnswersXiiiCount(Object.values(res.data.response_counts));
		
		})

		getAnswersCount(14)
		.then((res) => {
			console.log(res);
			setAnswersXivCount(Object.values(res.data.response_counts));
		
		})

		getAnswersCount(15)
		.then((res) => {
			console.log(res);
			setAnswersXvCount(Object.values(res.data.response_counts));
		
		})

		.catch((err) => {console.log(err)})

    }
	
    fetchAnswersCount()

	}, []);


  if (!isLogged()) return <Navigate to="/admin" replace />;

// Fonction utilitaire pour créer les données du graphique à partir des réponses
const createGraphPie = (answersSix) => {
	return {
		labels: [
			"Oculus Quest",
			"Oculus Rifts",
			"HTC Vive",
			"Valve index",
			"Windows Mixed Reality"], // Ajoutez des libellés si nécessaire
		datasets: [
			{
			label: '# of Votes',
			data: answersSix,
			backgroundColor: [
				"#FF6384",
				"#36A2EB",
				"#FFCE56",
				"#8BC34A",
				"#FF9800",
			]
			},
		],
		};
	};


	// Fonction utilitaire pour créer les données du graphique à partir des réponses
const createGraphPieSept = (answersSept) => {
	return {
		labels: [
			"SteamVR",
			"Occulus store",
			"Viveport",
			"Windows store"
		], // Ajoutez des libellés si nécessaire
		datasets: [
			{
			label: '# of Votes',
			data: answersSept ,
			backgroundColor: [
				"#FF6384",
				"#36A2EB",
				"#FFCE56",
				"#8BC34A",
			]
			},
		],
		};
	};

	
	// Fonction utilitaire pour créer les données du graphique à partir des réponses
const createGraphPieX = (answersSept) => {
	return {
		labels: [
    "regarder la TV en direct",
    "regarder des films",
    "travailler",
    "jouer en solo",
    "jouer en équipe"
], // Ajoutez des libellés si nécessaire
		datasets: [
			{
			label: '# of Votes',
			data: answersSept ,
			backgroundColor: [
				"#FF6384",
				"#36A2EB",
				"#FFCE56",
				"#8BC34A",
				"#FF9800",
			]
			},
		],
		};
	};


	// Fonction utilitaire pour créer les données du graphique à partir des réponses
const createGraphRadarXi = (answersXi) => {

	return {
			labels: ['1', '2', '3', '4', '5'],
			datasets: [{
				labels: "'My First Dataset'",
				data: answersXi,
				backgroundColor: 'aqua',
				borderColor: 'black'
			}]
		};
};




const createGraphRadarXii = (answersXii) => {

		return {
				labels: ['1', '2', '3', '4', '5'],
				datasets: [{
					labels: "'My First Dataset'",
					data: answersXii,
					backgroundColor: 'aqua',
					borderColor: 'black'
				}]
			};
		};


	const createGraphRadarXiii = (answersXiii) => {

		return {
			labels: ['1', '2', '3', '4', '5'],
			datasets: [{
				labels: "'My First Dataset'",
				data: answersXiii,
				backgroundColor: 'aqua',
				borderColor: 'black'
			}]
		};
	};

	const createGraphRadarXiv = (answersXiv) => {

		return {
			labels: ['1', '2', '3', '4', '5'],
			datasets: [{
				labels: "'My First Dataset'",
				data: answersXiv,
				backgroundColor: 'aqua',
				borderColor: 'black'
			}]
		};
	};


	const createGraphRadarXv = (answersXv) => {

		return {
			labels: ['1', '2', '3', '4', '5'],
			datasets: [{
				labels: "'My First Dataset'",
				data: answersXv,
				backgroundColor: 'aqua',
				borderColor: 'black'
			}]
		};
	};


return (

    <div className="page-admin-home">
			<div className="page-area">
				<div>
					<h1>Bienvenue dans votre espace administrateur</h1>
				</div>

				<div className="graphs-area">

					<div className="graphs">
						<GraphPie pieData={createGraphPie(answersSix)}/>
					</div>

					<div className="graphs">
						<GraphPie pieData={createGraphPieSept(answersSept)}/>
					</div>

					<div className="graphs">
						<GraphPie pieData={createGraphPieX(answersX)}/>
					</div>

					<div className="graphs">
						<GraphRadar radarData={createGraphRadarXi(answersXi)}/>
					</div>

					<div className="graphs">
						<GraphRadar radarData={createGraphRadarXii(answersXii)}/>
					</div>

					<div className="graphs">
						<GraphRadar radarData={createGraphRadarXii(answersXiii)}/>
					</div>

					<div className="graphs">
						<GraphRadar radarData={createGraphRadarXiv(answersXiv)}/>
					</div>

					<div className="graphs">
						<GraphRadar radarData={createGraphRadarXv(answersXv)}/>
					</div>

				</div>

			</div>
	</div>
  );
};




export default AdminHome;
