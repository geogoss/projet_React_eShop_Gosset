import React from "react";
import "./ModalPanier.css";


function ModalPanier(props) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              props.setOpenModal(false);
            }}
          >x</button>
        </div>

        <div className="title">
          <h1>Voici votre panier !</h1>
        </div>

        <div className="body">
          <p>Vous avez ajouter: <br/> → {props.name} à votre panier</p>
        </div>

        <div className="footer">
          <button
            onClick={() => {props.setOpenModal(false);}}id="cancelBtn">
            Continuer mes achats
          </button>
          <button>Vers mon panier</button>
        </div>
      </div>
    </div>
  );
}

export default ModalPanier;