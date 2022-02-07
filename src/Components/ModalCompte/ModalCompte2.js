import React from 'react';
import "./ModalCompte.css"

export default function ModalCompte2(props) {
    return (
        <div className='cadreCompte'>
            <div className="formulaire formuModalCompte2 bg-light">
                <form className=" mx-auto bg-light">
                    <div className="text-end m-0">
                        <i onClick={props.modalOf} className="croix fas fa-times" />
                    </div>
                    <h1 className="text-center">Connectez-vous</h1>
                    <p className="d-flex flex-column align-items-center">
                        <label htmlFor="prenom" className="form-label">Nom utilisateur :</label>
                        <input type="text" name="prenom" id="prenom" className="form-control w-50" />
                    </p>
                    <p className="d-flex flex-column align-items-center">
                        <label htmlFor="prenom" className="form-label">Nom :</label>
                        <input type="text" name="prenom" id="prenom" className="form-control w-50" />
                    </p>
                    <p className="d-flex flex-column align-items-center">
                        <label htmlFor="prenom" className="form-label">Prénom :</label>
                        <input type="text" name="prenom" id="prenom" className="form-control w-50" />
                    </p>
                    <p className="d-flex flex-column align-items-center">
                        <label htmlFor="prenom" className="form-label">Mot de passe :</label>
                        <input type="text" name="prenom" id="prenom" className="form-control w-50" />
                    </p>
                    <p className="d-flex flex-column align-items-center">
                        <label htmlFor="prenom" className="form-label">Confirmer le mot de passe :</label>
                        <input type="text" name="prenom" id="prenom" className="form-control w-50" />
                    </p>
                    <p className="d-flex flex-column align-items-center">
                        <button onClick={props.modalOf} className="btnFantome2 btn btn-info text-white p-3">S'inscrire</button>
                    </p>
                    <p className="text-center">
                        Vous avez déjà un compte ? <a onClick={props.modalOf} className="aFantome2" href="#">Se connecter</a>
                    </p>
                </form>
            </div>
        </div>
    );
}
