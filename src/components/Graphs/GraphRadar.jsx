import React from 'react';
import { Chart as ChartJS, LineElement, Tooltip, Legend, RadialLinearScale, PointElement, Filler } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import './Graph.scss';


ChartJS.register(LineElement, Tooltip, Legend, RadialLinearScale, PointElement, Filler);

const data = {
    labels: ['Mon', 'Tue', 'Wed', 'X', 'Test'],
    datasets: [{
        labels: "Vente de la semaine",
        data: [6, 3, 9, 6, 18],
        backgroundColor: 'aqua',
        borderColor: 'black'
    }]
}

const options = {
	
}

function GraphRadar({radarData}) {

    return (
        <div className='graph-style'>
            <Radar data={radarData} options={options}/>
        </div>
    )

}

export default GraphRadar;