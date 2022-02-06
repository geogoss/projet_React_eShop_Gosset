import React from "react";
import classes from './DisplayedArticle.module.css'
import ModalPanier from "../../ModalPanier/ModalPanier";

function DisplayedArticle(props, setOpenModal) {
    return (
        <div className={classes.DisplayedArticle}>
            <div className="allArticle">
                <div className='card m-3'>
                    <div className='imgdiv'>
                        <img src={props.article.image} alt="" />
                    </div>
                    <div className={props.stock <= 0 ? "bottomcard0" : "bottomcard" && props.stock == 1 ? "bottomcard1" : "bottomcard"}>
                        <h5>{props.article.titre}</h5>
                        <p className='latin'>{props.latin}</p>
                        <div className='cadre'>
                            <p className='mesure'>Mesure du plant / taille du pot</p>
                            <span className='detail'>{props.article.contenu}</span>
                        </div>
                        <div className='payement'>
                            <p className='prix'>Prix : 9.99€</p>
                            <button className='openModalBtn' onClick={() => {
                                props.achat()
                                // setOpenModal(true);
                            }}>
                                <i class="fas fa-shopping-cart"> </i></button>
                            {/* {modalOpen && <ModalPanier name={props.name} setOpenModal={setOpenModal} />} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DisplayedArticle;