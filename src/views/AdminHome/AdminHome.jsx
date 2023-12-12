import React from 'react';
import Navbar from '../Navbar/Navbar';
import GraphLine from '../../components/Graphs/Line';
import GraphPie from '../../components/Graphs/Pie';
import GraphRadar from '../../components/Graphs/Radar';
import GraphDoughnut from '../../components/Graphs/Doughnut';
import './AdminHome.scss';

const AdminHome = () => {
    return (
        <div className='page-admin-home'>

            <Navbar/>

            <div className='page-area'>
                <div>
                    <h1>Bienvenue dans votre espace administrateur</h1>
                </div>

                <div className='graphs-area'>
                    <GraphDoughnut/>
                    <GraphRadar/>
                    <GraphPie/>
                    <GraphLine/>
                </div>


            </div>
            
        </div>

    );
};

export default AdminHome;
