import React from "react";
import GraphLine from "../../components/Graphs/Line";
import GraphPie from "../../components/Graphs/Pie";
import GraphRadar from "../../components/Graphs/Radar";
import GraphDoughnut from "../../components/Graphs/Doughnut";
import "./AdminHome.scss";
import { Navigate } from "react-router-dom";
import { isLogged } from "../../services/AccountAuth";

const AdminHome = () => {
	if (!isLogged()) return <Navigate to="/admin" replace />;
	return (
		<div className="page-admin-home">
			<div className="page-area">
				<div>
					<h1>Bienvenue dans votre espace administrateur</h1>
				</div>

				<div className="graphs-area">
					<GraphDoughnut />
					<GraphRadar />
					<GraphPie />
					<GraphLine />
				</div>
			</div>
		</div>
	);
};

export default AdminHome;
