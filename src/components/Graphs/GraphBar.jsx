import React, { useEffect, useState } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Loading from "../Loading/Loading";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

function GraphBar({ data }) {
	const [parsedData, setParsedData] = useState(null);

	const parseData = () => {
		const newData = Object.values(data).map((d) => d.response);

		let dataP = {
			labels: [...new Set(newData)].sort((a, b) => a - b),
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
					label: "nombre de votes",
					data: dataP.occurrences,
					backgroundColor: "rgba(255, 99, 132, 0.5)",
				},
			],
		});
	};

	useEffect(() => {
		parseData();
	}, []);

	return (
		<div className="graph-style">
			{parsedData ? <Bar data={parsedData} /> : <Loading />}
		</div>
	);
}

export default GraphBar;
