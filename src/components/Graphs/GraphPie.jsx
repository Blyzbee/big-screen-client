import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./Graph.scss";
import Loading from "../Loading/Loading";

ChartJS.register(ArcElement, Tooltip, Legend);

const GraphPie = ({ data }) => {
	const [parsedData, setParsedData] = useState(null);

	const parseData = () => {
		const newData = data.map((d) => d.response);

		let dataP = {
			labels: [...new Set(newData)],
			occurrences: [],
		};

		dataP.labels.forEach((label) => {
			const occurrencesCount = newData.reduce((count, response) => {
				return count + (response === label ? 1 : 0);
			}, 0);

			dataP.occurrences.push(occurrencesCount);
		});

		setParsedData({
			labels: dataP.labels,
			datasets: [
				{
					label: "Nombre de votes",
					data: dataP.occurrences,
					backgroundColor: [
						"rgba(54, 162, 235, 0.2)",
						"rgba(153, 102, 255, 0.2)",
						"rgba(255, 159, 64, 0.2)",
						"rgba(255, 99, 132, 0.2)",
						"rgba(255, 206, 86, 0.2)",
						"rgba(75, 192, 192, 0.2)",
					],
					borderColor: [
						"rgba(54, 162, 235, 1)",
						"rgba(153, 102, 255, 1)",
						"rgba(255, 159, 64, 1)",
						"rgba(255, 99, 132, 1)",
						"rgba(255, 206, 86, 1)",
						"rgba(75, 192, 192, 1)",
					],
					borderWidth: 1,
				},
			],
		});
	};

	useEffect(() => {
		parseData();
	}, []);

	return (
		<div className="graph-style">
			{parsedData ? <Pie data={parsedData} /> : <Loading />}
		</div>
	);
};

export default GraphPie;
