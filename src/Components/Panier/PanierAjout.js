import React from 'react';
import "./Panier.css";


export default function PanierAjout(props) {




    return (
        
        <tr className='align-middle panierAjoutContent m-0 p-0'>
            <th scope="row"></th>
            <td><img src={props.img} alt="" /></td>
            <td>{props.nom}</td>
            <td> {props.prix} </td>
            <td className='plusetmoins'>
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
            <p onClick={() => {
                props.supprimer()
                
            }} className='croixPanier'>X</p>
        </tr>
    );
}
