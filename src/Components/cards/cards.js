import './cards.css'
import React, {useState} from "react";
import ModalPanier from "../ModalPanier/ModalPanier";
import { useNavigate } from 'react-router-dom';

function Cards(props) {
    const navigate = useNavigate()
    const[modalOpen, setOpenModal] = useState(false)
    return (
        <div>
            <div className="allArticle">
                <div className='card m-3'>
                    <div onClick={() => {
                        props.changeMonChoix(props.name)
                        navigate("/detail")
                    }}
                    className='imgdiv'>
                        <img src={props.image} alt="" />
                    </div>
                    <div className={props.stock <= 0 ? "bottomcard0" : "bottomcard" && props.stock == 1 ? "bottomcard1" : "bottomcard"}>
                        <h5>{props.name}</h5>
                        <p className='latin'>{props.latin}</p>
                        <div className='cadre'>
                            <p className='mesure'>Mesure du plant / taille du pot</p>
                            <span className='detail'>{props.detail}</span>
                        </div>
                        <div className='payement'>
                            <p className='prix'>Prix : {props.prix}€</p>
                            <button className='openModalBtn' onClick={() => {
                                props.achat()
                                setOpenModal(true);
                            }}>
                                <i class="fas fa-shopping-cart"> </i></button>
                            {modalOpen && <ModalPanier name={props.name}setOpenModal={setOpenModal}/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards