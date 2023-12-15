import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from "../../components/Button/Button";
import Icon from "../../components/Icon/Icon";
import {AccountAuth} from "../../services/AccountAuth"
import './Navbar.scss'

const Navbar = () => {
    // Déclare une variable navigate qui permet d'utiliser useNavigate
	const navigate = useNavigate(); 


	const logout = () => {
        // On récupère la fonction logout depuis le fichier services
		AccountAuth.logout()
        // On navigue vers la page de connexion admin
		navigate('/admin');
	};
    return (
        <div className='navbar-area main-admin-container'>
            <nav>
                
                <ul>
                    <h2>BigScreen</h2>

                    
                    <li><NavLink to="/admin/home" activeClassName="active-link">Accueil</NavLink></li>
                    <li><NavLink to="/admin/questions" activeClassName="active-link">Questionnaires</NavLink></li>
                    <li><NavLink to="/admin/answers" activeClassName="active-link">Réponses</NavLink></li>

                    {/* 
                    Une condition ternaire permet de conditionner l'affichage en fonction de notre 
                    état de connexion
                    */}

                    {AccountAuth.isLogged ? (
                        <Button onClick={logout}>
                            Deconnexion <Icon name="logout" mx />
                        </Button>
                    ) : (
                        <Button>
                            Connexion <Icon name="login" mx />
                        </Button>
                    )}

                </ul>

            </nav>
        </div>
    );
};

export default Navbar;