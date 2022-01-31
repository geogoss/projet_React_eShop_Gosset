import React from 'react';
import "./Navbar.css"

export default function Navbar() {
    return (
        // partie fr/en/nl

        <div className='cardreNavbar'>
            {/* partie haut navbar  => FR/EN/NL */}
            <div className="langue">
                <span>FR / EN / NL</span>
            </div>
            {/* partie Input recherche du Header */}
            <div className="preNavbar">
                <div className="divInput input-group">
                    <input type="text" placeholder='chercher' />
                    <span className='input-group-text'><i class="fas fa-search"></i></span>
                </div>
                <div className="panier">
                    <span>Mon Compte</span>
                    <span>Panier<i class="fas fa-search"></i></span>
                </div>
            </div>
        {/* Partie Navabar du header */}
            <div className="divNavbar">
                <nav class="navbar navbar-light navbar-expand-md">
                    <div class="container">
                        <div class="navbar-brand">
                            Jardin du Monde
                        </div>
                        {/* <!-- Le bouton s'affichera en petit écran --> */}
                        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#monMenuDeroulant">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="monMenuDeroulant">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a href="#" class="nav-link active">Accueil</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">Best Seller</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">Idées Cadeaux</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
