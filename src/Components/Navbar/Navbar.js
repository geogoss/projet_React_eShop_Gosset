import React from 'react';
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom';

export default function Navbar(props) {


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
                    <input type="text" placeholder='Chercher' />
                    <span className='input-group-text bg-success text-white'><i class="loupe fas fa-search"></i></span>
                </div>
                <div className="panier">
                    <div className='monCompte bg-success text-white'>
                        <i class="far fa-user-circle"></i>
                        <span onClick={props.modalOn} className='ps-2'>Mon Compte</span>
                    </div>
                    <div className='monPanier bg-success text-white'>
                        <i class="fas fa-list"></i>
                        <Link to="/panier" className='ps-2'>Panier</Link>
                    </div>
                </div>
            </div>
            {/* Partie Navabar du header */}
            <div className="divNavbar">
                <nav class="navbar navbar-light navbar-expand-md">
                    <div class="container">
                        <div id='jardin' class="navbar-brand">
                            Jardin du Monde
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
                                        to="/" class="nav-link active">Accueil</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "activeLink" : ""}
                                        to="seller" href="#" class="nav-link">Best Seller</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "activeLink" : ""}
                                        to="cadeaux" href="#" class="nav-link">Idées Cadeaux</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "activeLink" : ""}
                                        to="contact" href="#" class="nav-link">Contact</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "activeLink" : ""}
                                        to="categorie" href="#" class="nav-link">Catégories</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
