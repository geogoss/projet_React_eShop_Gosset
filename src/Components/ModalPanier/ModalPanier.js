import React from "react";
import "./ModalPanier.css";
import { Link } from "react-router-dom";


function ModalPanier(props) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className=" text-dark"
            onClick={() => {
              props.setOpenModal(false);
            }}
          >x</button>
        </div>

        <div className="title">
          <h1>Panier</h1>
        </div>

        <div className="body">
          <p className="fs-5">Vous avez ajouté: <br /> → <span className="text-success">{props.name}</span> </p>
        </div>

        <div className="footer">
          <button
            onClick={() => { props.setOpenModal(false); }} id="cancelBtn">
            Continuer mes achats
          </button>
          <button>
            <Link to='/panier'>Vers mon panier</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalPanier;