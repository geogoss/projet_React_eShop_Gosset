import React from 'react';
import "./Contact.css";
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

export default function Contact() {

  const {theme} = useContext(ThemeContext)

  return <div className='cadreContact mb-5'>
    <header className='w-100 mt-5'>
      <div className="texte w-75 mx-auto text-center p-3">
        <h1>Contactez-nous</h1>
        <p className='fw-bold'>Si vous avez des questions à propos d'une commande ou si vous avez besoin d'informations sur nos produits.</p>
        <p className='fw-bold'>Conatcez-nous via le formulaire ci-dessous, nous vous répondrons dans les plus bref délais.</p>
        <p>Vous pouvez également nous contacter par <a className='email fw-bold' href="mailto:cactuBoy@gmail.com">email</a> ou par voie postale (voir coordonnées ci-dessous)</p>
      </div>
    </header>
    <section>
      <article className='formulaire pt-3'>
        <h3 className='text-center'>Formulaire</h3>
        <form className={theme ? "mx-auto bg-dark text-white " :"mx-auto"}>
          <p>
            <label htmlFor="nom" className="form-label">Nom</label>
            <input type="text" name="nom" id="nom" className="form-control" />
          </p>
          <p>
            <label htmlFor="prenom" className="form-label">Prénom</label>
            <input type="text" name="prenom" id="prenom" className="form-control" />
          </p>
          <p>
            <label htmlFor="pays" className="form-label">Pays</label>
            <select name="pays" id="pays" className="form-select">
              <option value="France">Belgique</option>
              <option value="France">France</option>
              <option value="Suisse">Suisse</option>
              <option value="Congo">Allemagne</option>
              <option value="Congo">Pays Bas</option>
              <option value="Congo">Luxembourg</option>
            </select>
          </p>
          <p>
            <input type="file" name="fichier" className="form-control" />
          </p>
          <p>
            <label htmlFor="email" className="form-label">Adresse email</label>
            <input type="email" name="email" id="email" defaultValue="john@gmail.com" className="form-control" />
          </p>
          <p>
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" defaultValue={""} />
          </p>
          <p className="form-check form-switch">
            <input type="checkbox" name="mode_sombre" className="form-check-input" id="mode_sombre_pour_switch" />
            <label htmlFor="mode_sombre_pour_switch" className="form-check-label">J'ai déjà fait des commandes chez jardins du monde</label>
          </p>
        </form>
        <div className={theme ? "bg-dark text-white captcha bg-light w-50 p-3 mt-5 mx-auto d-flex justify-content-between align-items-center"  : "captcha bg-light w-50 p-3 mt-5 mx-auto d-flex justify-content-between align-items-center"}>
          <p className="form-check">
            <input type="checkbox" name="mode_sombre" className="form-check-input" id="mode_sombre" />
            <label htmlFor="mode_sombre" className="form-check-label">Je ne suis pas un robot</label>

          </p>
          <i class="fas fa-robot"></i>
          <i class="fas fa-recycle"></i>
        </div>

        <div className={theme ? 'bg-dark text-white bouton p-3 d-flex flex-column justify-content-center align-items-center' : 'bouton p-3 d-flex flex-column justify-content-center align-items-center'}>
          <p className="form-check">
            <input type="checkbox" name="mode_sombre" className="form-check-input" id="mode_sombre" />
            <label htmlFor="mode_sombre" className="form-check-label">J'accepte les <span className="text-success">conditions générales</span> et la <span className="text-success">politiques de confidentialité</span></label>
          </p>
          <button className='btn btn-success mt-3'>Envoyer</button>
        </div>

      </article>


      <aside className={theme ? 'text-center bg-dark text-white' : 'text-center'}>
        <h3 className='text-center pt-3'>Coordonnées</h3>
        <div className="coordonnees pt-3">
          <p className='fs-5'>Jardins du Monde</p>
          <p>Boland François</p>
          <p>Avenue du Fort 51</p>
          <p>B-4400 Flémale</p>
          <p>Belgique</p>
        </div>
        <div className="join mb-5">
          <a href="mailto:info@jardins-du-monde.be">info@jardins-du-monde.be</a>
          <a href="tel:+32 495 44 12 73">+32 (0) 495 44 12 73</a>
        </div>
        <div className='plan m-5'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2532.368518637878!2d5.461325851140492!3d50.601689479395866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0fed04f5faab1%3A0xa35fe8791a48adf1!2sAv.%20du%20Fort%2051%2C%204400%20Fl%C3%A9malle!5e0!3m2!1sfr!2sbe!4v1643799104021!5m2!1sfr!2sbe" width={400} height={300} style={{ border: 0 }} allowFullScreen loading="lazy" />      </div>
      </aside>
    </section>
  </div>;
}
