import React from 'react';
import './AdminHome.scss';
import Navbar from '../Navbar/Navbar';

const AdminHome = () => {
    return (
        <div className='page-admin-home'>

            <Navbar/>

            <div className='page-area'>
                <div>
                    <h1>Bienvenue dans votre espace administrateur</h1>
                </div>

                <figure>
                    {/* Ajoutez ici le contenu de la figure */}
                </figure>
            </div>
            
        </div>

    );
};

export default AdminHome;
