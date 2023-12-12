import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='main-admin-container'>
            <nav>
                
                <h2>BigScreen</h2>

                <ul>
                    <li><NavLink to="/admin/home" activeClassName="active-link">Accueil</NavLink></li>
                    <li><NavLink to="/admin/questions" activeClassName="active-link">Questionnaires</NavLink></li>
                    <li><NavLink to="/admin/answers" activeClassName="active-link">Réponses</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;