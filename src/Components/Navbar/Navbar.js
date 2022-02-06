import React from 'react';
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Navbar({text, setText, modalOn, resetMonChoix}) {

    const navigate = useNavigate()

    let changeText = (e) => {
        if (e.key === "Enter") {
            text = e.target.value
            setText({text})
            resetMonChoix()
            
        };
    };


    return (
        // partie fr/en/nl
        <div className='cardreNavbar'>
            {/* partie haut navbar  => FR/EN/NL */}
            <div className="langue">
                <span><span className='text-success'>FR</span> / <span>EN</span> / <span>NL</span></span>
            </div>
            {/* partie Input recherche du Header */}
            <div className="preNavbar">
                <div className="divInput input-group">
                    <input onKeyPress={changeText}
                    type="text" placeholder='Chercher' />
                    <span onClick={() => navigate("/detail")}
                    className='input-group-text bg-success text-white'><i class="loupe fas fa-search"></i></span>
                </div>
                <div className="panier">
                    <div className='monCompte bg-success text-white'>
                        <i class="far fa-user-circle"></i>
                        <span onClick={modalOn} className='ps-2'>Mon Compte</span>
                    </div>
                    <div className='monPanier bg-success text-white'>
                    <i class="fas fa-shopping-basket"></i>
                        <Link to="/panier" className='ps-2'>Panier</Link>
                    </div>
                </div>
            </div>
            {/* Partie Navabar du header */}
            <div className="divNavbar">
                <nav class="navbar navbar-light navbar-expand-md">
                    <div class="container">
                        <div id='jardin' class="navbar-brand">
                            Jardin d'Eden
                        </div>
                        {/* <!-- Le bouton s'affichera en petit écran --> */}
                        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#monMenuDeroulant">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="monMenuDeroulant">
                            <ul class="navbar-nav">

                                <li class="nav-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "activeLink" : ""}
                                        to="/" class="nav-link active">Home <i class="fas fa-home"></i></NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "activeLink" : ""}
                                        to="categorie" href="#" class="nav-link">Catégories <i class="fas fa-align-justify"></i></NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "activeLink" : ""}
                                        to="seller" href="#" class="nav-link">18+  <i class="fas fa-exclamation-triangle"></i></NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "activeLink" : ""}
                                        to="contact" href="#" class="nav-link">Contact <i class="fas fa-voicemail"></i></NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "activeLink" : ""}
                                        to="detail" href="#" class="nav-link">Détail <i class="far fa-address-card"></i></NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "activeLink" : ""}
                                        to="admin" href="#" class="nav-link">Admin <i class="fas fa-user-cog"></i></NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
