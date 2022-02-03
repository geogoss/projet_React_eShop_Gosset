import React from 'react';
import "./Panier.css";
import { useState, useEffect } from "react";


export default function PanierAjout(props) {

    const [argent, setArgent] = useState(0)
    // nombre dans chaque panier
    // const [nombre, setNombre] = useState()
    // const augmente = (i) => {
    //     if (props.panier) {
    //         props.panier += 1
            
    //     }
    //         props.essai(props.argent)
    // }

    // const diminue = (i) => {
        
    //     props.essaiMoins(props.argent)
    // }


    

    return (
        <tr className='align-middle'>
            <th scope="row"></th>
            <td><img src={props.img} alt="" /></td>
            <td>{props.nom}</td>
            <td> {props.prix} </td>
            <td>
                <span onClick={props.diminue} className='moins'>-</span>
                <span className='nombre'> {props.panier} </span>
                <span onClick={ () => {
                    props.incr()
                    props.plusUn()
                    
                }
                } 
                className='plus'>+</span>
            </td>
            <td>{(props.argent*props.panier).toFixed(2)} <i class="fas fa-euro-sign"></i></td>
        </tr>
    );
}
