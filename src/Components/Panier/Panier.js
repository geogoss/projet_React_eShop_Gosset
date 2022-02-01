import React from 'react';
import "./Panier.css";
import pin from "../../assets/images/pin.jpg"
import palmier from "../../assets/images/palmier.jpg"
import aubepine from "../../assets/images/aubepine.jpg"


export default function Panier(props) {




    return (
        <div className='cadrePanier w-50 mx-auto'>
            <table class="table table-info table-striped table-hover">
                <thead>
                    <tr className='table-primary'>
                        <th scope="col">#</th>
                        <th scope="col">Article</th>
                        <th scope="col">nom</th>
                        <th scope="col">Prix</th>
                        <th scope="col">Quantité</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='align-middle'>
                        <th scope="row">1</th>
                        <td><img src={aubepine} alt="" /></td>
                        <td>Saule</td>
                        <td>15 </td>
                        <td>
                            <span className='moins'>-</span>
                            <span className='nombre'>3</span>
                            <span onClick={props.ajout} className='plus'>+</span>
                        </td>
                        <td>{props.argent} <i class="fas fa-euro-sign"></i></td>
                    </tr>
                    {/* <tr className='align-middle'>
                        <th scope="row">2</th>
                        <td><img src={palmier} alt="" /></td>
                        <td>Magnolia</td>
                        <td>54</td>
                        <td>
                            <span className='moins'>-</span>
                            <span className='nombre'>2</span>
                            <span className='plus'>+</span>
                        </td>
                        <td>108 <i class="fas fa-euro-sign"></i></td>
                    </tr>
                    <tr className='align-middle'>
                        <th scope="row">3</th>
                        <td><img src={pin} alt="" /></td>
                        <td>Chêne</td>
                        <td>19 </td>
                        <td>
                            <span className='moins'>-</span>
                            <span className='nombre'>1</span>
                            <span className='plus'>+</span>
                        </td>
                        <td>19 <i class="fas fa-euro-sign"></i></td>
                    </tr> */}
                </tbody>
            </table>
            <div className="total">
                <div className="reduction">
                    <p className='form-check'>
                        <input onClick={props.reductionOnOf} type="checkbox" name="reduction" className='form-check-input' />
                        <label className='form-check-label' htmlFor="reduction">J'ai un bon de réduction</label>
                    </p>
                    {props.toggleReduction && 
                    <p className='input-group inputReduction'>
                        <input type="text" placeholder='Ecrivez votre code' />
                        <span className='input-group-text bg-success text-white'>
                            <i onClick={ () => {
                                props.modalReductionOnOf()
                                props.appliquerReduction()
                                
                            }}
                            class=" choix fas fa-thumbs-up"></i></span>
                    </p>
                    }

                </div>
                <table className='table montantTotal'>
                    <thead className='table-primary'>
                        <tr>
                            <th scope="col">Montant total</th>
                            <th scope="col"></th>
                            <th scope="col">Hors TVA</th>
                            <th scope="col"></th>
                            <th scope="col">TVAC 21%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope='row'>à payer</th>
                            <th></th>
                            <th>{props.argentHtva} <i class="fas fa-euro-sign"></i></th>
                            <th></th>
                            <th className='table-active text-danger'>{props.argentTotal} <i class="fas fa-euro-sign"></i></th>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}
