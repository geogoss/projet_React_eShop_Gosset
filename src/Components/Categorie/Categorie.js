import React from 'react';
import "./Categorie.css"
import { Link, Outlet, NavLink } from 'react-router-dom';

export default function Categorie(props) {
    return (
        <div className='cadreCategorie'>
            <nav>
                <ul className="liste">
                    <li onClick={() => {
                        props.changeElement('arbre')
                    }}>
                        <NavLink
                            className={({ isActive }) => isActive ? "text-success fw-bold" : ""}
                            to="/categorie/arbres" >Arbres</NavLink>
                    </li>
                    <li onClick={() => {
                        props.changeElement('arbuste')
                    }}>
                        <NavLink
                            className={({ isActive }) => isActive ? "text-success fw-bold" : ""}
                            to="/categorie/arbustes" >Arbustes</NavLink>
                    </li>
                    <li onClick={() => {
                        props.changeElement('fruitier')
                    }}>
                        <NavLink
                            className={({ isActive }) => isActive ? "text-success fw-bold" : ""}
                            to="/categorie/fruitiers" >Arbres fruitiers</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}
