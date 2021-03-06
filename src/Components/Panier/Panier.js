import React from 'react';
import "./Panier.css";
import PanierAjout from "./PanierAjout";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

export default function Panier(props) {

    const {theme} = useContext(ThemeContext)
    const navigate = useNavigate()

    const enlever = (i,article) => {
        props.supprimer(i)
        props.essaiMoins(article.prix * article.panier)
    } 

    const augmente = (el) => {
        el.panier += 1
        props.essai(el.prix)
        navigate("/panier")

    }

    const diminue = (el) => {
        if (el.panier>1) {
            el.panier -= 1
        props.essaiMoins(el.prix)
        navigate("/panier")
        }

    }

    // const [payement, setPayement] = useState(0)

    // let sum = 0;

    // for (let i = 0; i < props.PrixPanier.length; i++) {
    //     sum += props.PrixPanier[i];
    // }

    return (
        <div className='cadrePanier w-50'>
            <table class={theme ? "table table-dark table-striped table-hover" : "table table-info table-striped table-hover"}>
                <thead>
                    <tr className='table-primary'>
                        <th scope="col"></th>
                        <th scope="col">Article</th>
                        <th scope="col">nom</th>
                        <th scope="col">Prix</th>
                        <th scope="col">Quantité</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {props.panier.map((item, i) => (<PanierAjout key={i} supprimer={() => enlever(i, item)} diminue={() => diminue(item)} incr={() => augmente(item)} panier={item.panier} essaiMoins={props.essaiMoins} essai={props.essai} argentTotal={props.argentTotal.toFixed(2)} achat={() => { props.acheter(i) }} argent={item.argent} img={item.img} nom={item.nom} latin={item.latin} detail={item.detail} prix={item.prix} />))}

                </tbody>
            </table>
            <div className="total">
                <div className="reduction">
                    <p className='form-check'>
                        <input onClick={props.reductionOnOf} type="checkbox" name="reduction" className='form-check-input' />
                        <label className={theme ? 'form-check-label text-white' : 'form-check-label'} htmlFor="reduction">J'ai un bon de réduction</label>
                    </p>
                    {props.toggleReduction &&
                        <p className='input-group inputReduction'>
                            <input type="text" placeholder='Ecrivez votre code' />
                            <span className='input-group-text bg-success text-white'>
                                <i onClick={() => {
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
                            <th className={theme ? "text-white" : "" }  scope='row'>à payer</th>
                            <th></th>
                            <th className={theme ? "text-white" : "" } >{props.argentHtva.toFixed(2)} <i class="fas fa-euro-sign"></i></th>
                            <th></th>
                            <th className='table-active text-danger'>{props.argentTotal.toFixed(2)} <i class="fas fa-euro-sign"></i></th>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div className='text-end'>
                <button onClick={ props.viderPanier} className='btn btn-success me-5'>Vider le panier</button>
                <button onClick={props.modalPayerOn} className='btn btn-success '>Payer</button>
            </div>
        </div>
    );
}
