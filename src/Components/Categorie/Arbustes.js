import React from 'react';
import Cards from '../cards/cards';
import { useState } from 'react';

export default function Arbustes(props) {

  const [arbuste, setArbuste] = useState([
    //Arbustes

    {
      nom: 'Magnolia étoilé',
      prix: 7.55,
      argent: 7.55,
      latin: 'Magnolia kobus Stelatta',
      detail: '60/70 cm P9',
      img: 'https://www.jardins-du-monde.be/1752-thickbox_default/magnolia-etoile.jpg',
      type: 'arbuste'
    },
    {
      nom: 'Magnolia de Kobé',
      prix: 7.75,
      argent: 7.75,
      latin: 'Magnolia Kobus',
      detail: '60/70cm P9',
      img: 'https://www.jardins-du-monde.be/2856-thickbox_default/magnolia-de-kobe.jpg',
      type: 'arbuste'
    },
    {
      nom: 'Magnolia Loeberni Leonard',
      prix: 6.89,
      argent: 6.89,
      latin: 'Magnolia Loeberni Leonard Messel',
      detail: '50/60 pot Ø 12cm',
      img: 'https://www.jardins-du-monde.be/683-thickbox_default/magnolia-loebneri-leonard-messel.jpg',
      type: 'arbuste'
    },
    {
      nom: 'Cornouiller',
      prix: 6.99,
      argent: 6.99,
      latin: 'Cornus Mas',
      detail: '50/60 cm pot 1L',
      img: 'https://www.jardins-du-monde.be/1552-thickbox_default/cornouiller.jpg',
      type: 'arbuste'
    },
    {
      nom: 'Cognassier du Japon',
      prix: 6.25,
      argent: 6.25,
      latin: 'Chaenomeles Japonica',
      detail: '40/60 cm pot 1L',
      img: 'https://www.jardins-du-monde.be/2881-thickbox_default/cognassier-du-japon.jpg',
      type: 'arbuste'
    },
    {
      nom: 'Weigelia panaché nain',
      prix: 6.15,
      argent: 6.15,
      latin: 'Weigela Florida Nana Variegata',
      detail: '40/60 cm pot 1L',
      img: 'https://www.jardins-du-monde.be/578-thickbox_default/weigelia-panache-nain.jpg',
      type: 'arbuste'
    },
    {
      nom: 'Deutzie Gracilis',
      prix: 5.31,
      argent: 5.31,
      latin: 'Deutzie Gracilis',
      detail: '40/50 cm pot 1L',
      img: 'https://www.jardins-du-monde.be/485-thickbox_default/deutzia-gracilis.jpg',
      type: 'arbuste'
    },
    {
      nom: 'Seringat Snowbelle',
      prix: 6.25,
      argent: 6.25,
      latin: 'Philadelphus virginalis Snowbelle',
      detail: '40/60 cm pot 1L',
      img: 'https://www.jardins-du-monde.be/3116-thickbox_default/seringat-snowbelle.jpg',
      type: 'arbuste'
    },

])

  return (
    <div className='cardsmap d-flex flex-wrap justify-content-around'>
      {arbuste.map((item, i) => (<Cards key={i} achat={() => { props.acheter(i) }} image={item.img} name={item.nom} latin={item.latin} detail={item.detail} prix={item.prix} />))}
    </div>
  );
}
