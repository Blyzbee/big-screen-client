import React from 'react';
import './AdminQuestion.scss';
import Navbar from '../Navbar/Navbar';

const AdminQuestion = () => {
    return (
        <div className='page-admin-question'>

            <Navbar/>

            <div className='page-area'>
                <div>
                    <h1>Espace | Questionnaires </h1>
                </div>

                <figure>
                    {/* Ajoutez ici le contenu de la figure */}
                </figure>
            </div>
            
        </div>

    );
};

export default AdminQuestion;
