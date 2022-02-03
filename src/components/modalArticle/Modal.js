import React from "react";
import "./Modal.css";

function Modal({setOpenModal}) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            x
          </button>
        </div>
        <div className="title">
          <h1>Voici votre panier !</h1>
        </div>
        <div className="body">
          <p>Vous avez ajouter: <br/> → (nom de l'article) à votre panier</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Vers mon panier
          </button>
          <button>Continuer mes achats</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
