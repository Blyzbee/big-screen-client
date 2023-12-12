import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './Graph.scss';


ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutData = {
    labels: ['Yes', 'No'],
    datasets: [{
        labels: "Avis",
        data: [6, 3],
        backgroundColor: ['black', 'white'],
        borderColor: 'black'
    }]
}

const options = {

}

function GraphDoughnut() {

    return (
        <div className='graph-style'>
            <Doughnut data={DoughnutData} options={options}/>
        </div>
    )
    
}

export default GraphDoughnut;