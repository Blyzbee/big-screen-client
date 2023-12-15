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
        backgroundColor: 'lightgray',
        borderColor: 'black'
    }]
}

const options = {

}

function GraphRadar() {

    return (
        <div className='graph-style'>
            <Radar data={data} options={options}/>
        </div>
    )
    
}

export default GraphRadar;