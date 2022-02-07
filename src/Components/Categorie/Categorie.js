import React from 'react';
import { useContext } from 'react';
import "./Categorie.css"
import { Link, Outlet, NavLink } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';

export default function Categorie(props) {

    const {theme} = useContext(ThemeContext)


    return (
        <div className='cadreCategorie'>
            <nav>
                <ul className="liste">
                    <li className={theme ? "ligthLi" : "darkLi"} onClick={() => {
                        props.changeElement('arbre')
                    }}>
                        <NavLink
                            className= {({ isActive }) => isActive ? "text-success fw-bold" : " "}
                            to="/categorie/arbres" >Arbres</NavLink>
                    </li>
                    <li className={theme ? "ligthLi" : "darkLi"} onClick={() => {
                        props.changeElement('arbuste')
                    }}>
                        <NavLink
                            className={({ isActive }) => isActive ? "text-success fw-bold" : " "}
                            to="/categorie/arbustes" >Arbustes</NavLink>
                    </li>
                    <li className={theme ? "ligthLi" : "darkLi"} onClick={() => {
                        props.changeElement('fruitier')
                    }}>
                        <NavLink
                            className={({ isActive }) => isActive ? "text-success fw-bold" : " "}
                            to="/categorie/fruitiers" >Arbres fruitiers</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}
