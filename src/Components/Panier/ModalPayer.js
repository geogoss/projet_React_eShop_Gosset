import React from 'react';
import "./ModalPayer.css"

export default function ModalPayer(props) {
    return (
        <div className='cadreModalPayer'>
            <div className="formulaire formuModalCompte bg-light">
                <form className="mx-auto">
                    <p className='fs-2 text-center'>Finalisez votre achat</p>
                    <p>
                        <label htmlFor="nom" className="form-label">Nom</label>
                        <input type="text" name="nom" id="nom" className="form-control" />
                    </p>
                    <p>
                        <label htmlFor="prenom" className="form-label">Prénom</label>
                        <input type="text" name="prenom" id="prenom" className="form-control" />
                    </p>
                    <p>
                        <label htmlFor="email" className="form-label">Adresse email</label>
                        <input type="email" name="email" id="email" defaultValue="john@gmail.com" className="form-control" />
                    </p>
                    <p>
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" defaultValue={""} />
                    </p>
                    <p>
                        <label htmlFor="pays" className="form-label">Coisissez votre mode de payement</label>
                        <select name="pays" id="pays" className="form-select">
                            <option value="Bancontact">Bancontact</option>
                            <option value="VISA">VISA</option>
                            <option value="PAYPAL">PAYPAL</option>
                            <option value="ApplePay">ApplePay</option>
                            <option value="Crypto">Crypto</option>
                            <option value="Nature">Nature (uniquement pour CactusB0y)😽</option>
                        </select>
                    </p>
                    <p className="form-check form-switch">
                        <input type="checkbox" name="mode_sombre" className="form-check-input" id="mode_sombre_pour_switch" />
                        <label htmlFor="mode_sombre_pour_switch" className="form-check-label">Je veux recevoir des emails commerciaux de merde</label>
                    </p>
                </form>
                <div className="captcha bg-light w-50 p-3 mt-5 mx-auto d-flex justify-content-between align-items-center">
                    <p className="form-check">
                        <input type="checkbox" name="mode_sombre" className="form-check-input" id="mode_sombre" />
                        <label htmlFor="mode_sombre" className="form-check-label">Je ne suis pas un robot</label>

                    </p>
                    <i class="fas fa-robot"></i>
                    <i class="fas fa-recycle"></i>
                </div>

                <div className='bouton p-3 d-flex flex-column justify-content-center align-items-center'>
                    <p className="form-check">
                        <input type="checkbox" name="mode_sombre" className="form-check-input" id="mode_sombre" />
                        <label htmlFor="mode_sombre" className="form-check-label">J'accepte les <span className="text-success">conditions générales</span> et la <span className="text-success">politiques de confidentialité</span></label>
                    </p>
                    <button onClick={() => {
                        props.modalPayerOf()
                        props.viderPanier()
                    }}
                        className='btn btn-success mt-3'>Payer</button>
                </div>
            </div>

        </div>
    );
}
