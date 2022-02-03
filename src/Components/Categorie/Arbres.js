import React from 'react';
import Cards from '../cards/cards';
import { useState } from 'react';

export default function Arbres(props) {

  const [arbre, setArbre] = useState([
    //Arbres
    {
      nom: 'Érable de Cappadoce',
      prix: 6.78,
      argent: 6.78,
      latin: 'Acer Cappadocicum',
      detail: '60/80 cm pot 1L',
      img: 'https://www.jardins-du-monde.be/1802-thickbox_default/erable-de-cappadoce.jpg',
      type: 'arbre'
    },
    {
      nom: "Copalme d'Amérique",
      prix: 7.59,
      argent: 7.59,
      latin: 'Liquidambar styraciflua',
      detail: '70/80 cm pot 1L',
      img: 'https://www.jardins-du-monde.be/358-thickbox_default/copalme-d-amerique.jpg',
      type: 'arbre'
    },
    {
      nom: 'Magnolia de Kobé',
      prix: 7.75,
      argent: 7.75,
      latin: 'Magnolia Kobus',
      detail: '70/80cm pot 1L5',
      img: 'https://www.jardins-du-monde.be/2856-thickbox_default/magnolia-de-kobe.jpg',
      type: 'arbre'
    },
    {
      nom: 'Bouleau pleureur de Young',
      prix: 9.99,
      argent: 9.99,
      latin: 'Betula Pendula Youngli',
      detail: '80/100cm pot 1L5',
      img: 'https://www.jardins-du-monde.be/3239-thickbox_default/bouleau-pleureur-de-young.jpg',
      type: 'arbre'
    },
    {
      nom: "Bouleau blanc de l'Himalaya",
      prix: 9.99,
      argent: 9.99,
      latin: 'Betula Utilis Jacquemontii',
      detail: '50/60 cm pot 1L5',
      img: 'https://www.jardins-du-monde.be/3279-thickbox_default/bouleau-blanc-de-l-himalaya.jpg',
      type: 'arbre'
    },
    {
      nom: 'Charme Houblon',
      prix: 6.99,
      argent: 6.99,
      latin: 'Ostrya Carpinifolia',
      detail: '50/60 cm pot 1L5',
      img: 'https://www.jardins-du-monde.be/2002-thickbox_default/charme-houblon.jpg',
      type: 'arbre'
    },
    {
      nom: "Copalme d'Amérique ",
      prix: 6.99,
      argent: 6.99,
      latin: 'Liquidambar Styraciflua Worplesdon',
      detail: '40/45 cm P9',
      img: 'https://www.jardins-du-monde.be/2262-thickbox_default/copalme-d-amerique-worplesdon.jpg',
      type: 'arbre'
    },
    {
      nom: 'Tileul de Mongolie',
      prix: 26.00,
      argent: 26.00,
      latin: 'Tilia mongolica',
      detail: '120/130 cm pot 2L',
      img: 'https://www.jardins-du-monde.be/3850-thickbox_default/tilleul-de-mongolie.jpg',
      type: 'arbre'
    },

])


  return (
    <div className='cardsmap d-flex flex-wrap justify-content-around'>
      {arbre.map((item, i) => (<Cards key={i} achat={() => { props.acheter(i) }} image={item.img} name={item.nom} latin={item.latin} detail={item.detail} prix={item.prix} />))}
    </div>
  );
}
