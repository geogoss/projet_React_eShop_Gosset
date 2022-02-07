import React from 'react';
import "./ModalCompte.css";
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

export default function ModalCompte(props) {


    const {theme} = useContext(ThemeContext)

    return (

        <div className='cadreCompte'>
            <div className={theme ? "formulaire formuModalCompte formulaireDark"  :"formulaire formuModalCompte bg-light"}>
                <form className={theme ? "my-5 mx-auto formulaireDark":"my-5 mx-auto bg-light"}>
                    <div className="text-end m-0">
                        <i onClick={props.modalOf} className="croix fas fa-times" />
                    </div>
                    <h1 className="text-center">Connectez-vous</h1>
                    <p className="d-flex flex-column align-items-center">
                        <label htmlFor="prenom" className="form-label">Nom utilisateur :</label>
                        <input type="text" name="prenom" id="prenom" className="form-control w-50" />
                    </p>
                    <p className="d-flex flex-column align-items-center">
                        <label htmlFor="prenom" className="form-label">Mot de passe :</label>
                        <input type="text" name="prenom" id="prenom" className="form-control w-50" />
                    </p>
                    <p className="d-flex flex-column align-items-center">
                        <button onClick={props.modalOf} className="btnFantome1 btn btn-info text-white p-3">Connexion</button>
                    </p>
                    <p className="text-center">
                        Pas encore de compte ? <a onClick={ () => {
                            props.modalOf()
                            props.modalSecondOn()
                        }
                        } 
                        className="aFantome1" href="#">S'inscrire</a>
                    </p>
                </form>
            </div>

        </div>
    );
}
