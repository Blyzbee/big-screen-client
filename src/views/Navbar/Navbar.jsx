import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from "../../components/Button/Button";
import Icon from "../../components/Icon/Icon";
import {AccountAuth} from "../../services/AccountAuth"
import './Navbar.scss'

const Navbar = () => {
	const navigate = useNavigate(); 


	const logout = () => {
		AccountAuth.logout()

		navigate('/admin');
	};
    return (
        <div className='navbar-area main-admin-container'>
            <nav>
                
                <h2>BigScreen</h2>

                <ul>
                    <li><NavLink to="/admin/home" activeClassName="active-link">Accueil</NavLink></li>
                    <li><NavLink to="/admin/questions" activeClassName="active-link">Questionnaires</NavLink></li>
                    <li><NavLink to="/admin/answers" activeClassName="active-link">Réponses</NavLink></li>
                </ul>

                {AccountAuth.isLogged ? (
				<Button onClick={logout}>
					Deconnexion <Icon name="logout" mx />
				</Button>
			) : (
				<Button>
					Connexion <Icon name="login" mx />
				</Button>
			)}
            </nav>
        </div>
    );
};

export default Navbar;