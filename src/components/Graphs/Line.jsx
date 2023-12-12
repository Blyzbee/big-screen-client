import React from 'react';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import './Graph.scss';


ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const lineData = {
    labels: ['Mon', 'Tue', 'Wed'],
    datasets: [{
        labels: "Vente de la semaine",
        data: [6, 3, 9],
        backgroundColor: 'aqua',
        borderColor: 'black',
        pointBorderColor: 'aqua',
        fill: true,
        tension: 0.4
    }]
}

const options = {
    plugins: {
        legend:true
    },

    scales: {
        y:{}
    }
}

function GraphLine() {

    return (
        <div className='graph-style'>
            <Line data={lineData} options={options}/>
        </div>
    )
    
}

export default GraphLine;