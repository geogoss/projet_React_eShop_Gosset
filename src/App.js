import React, { useState } from 'react';
import './App.css'
import Cards from './components/cards/cards'

function App() {

  const [item, setItem] = useState([
    //Arbres
    {
      nom: 'Érable de Cappadoce',
      prix: 6.75,
      latin: 'Acer Cappadocicum',
      detail: '60/80 cm pot 1L',
      img: 'https://www.jardins-du-monde.be/1802-thickbox_default/erable-de-cappadoce.jpg',
      type: 'arbre'
    },
    {
      nom: "Copalme d'Amérique",
      prix: 7.59,
      latin: 'Liquidambar styraciflua',
      detail: '70/80 cm pot 1L',
      img: 'https://www.jardins-du-monde.be/358-thickbox_default/copalme-d-amerique.jpg',
      type: 'arbre'
    },
    {
      nom: 'Magnolia de Kobé',
      prix: 7.75,
      latin: 'Magnolia Kobus',
      detail: '70/80cm pot 1L5',
      img: 'https://www.jardins-du-monde.be/2856-thickbox_default/magnolia-de-kobe.jpg',
      type: 'arbre'
    },
    {
      nom: 'Bouleau pleureur de Young',
      prix: 9.99,
      latin: 'Betula Pendula Youngli',
      detail: '80/100cm pot 1L5',
      img: 'https://www.jardins-du-monde.be/3239-thickbox_default/bouleau-pleureur-de-young.jpg',
      type: 'arbre'
    },
    {
      nom: "Bouleau blanc de l'Himalaya",
      prix: 9.99,
      latin: 'Betula Utilis Jacquemontii',
      detail: '50/60 cm pot 1L5',
      img: 'https://www.jardins-du-monde.be/3279-thickbox_default/bouleau-blanc-de-l-himalaya.jpg',
      type: 'arbre'
    },
    {
      nom: 'Charme Houblon',
      prix: 6.99,
      latin: 'Ostrya Carpinifolia',
      detail: '50/60 cm pot 1L5',
      img: 'https://www.jardins-du-monde.be/2002-thickbox_default/charme-houblon.jpg',
      type: 'arbre'
    },
    {
      nom: "Copalme d'Amérique Worplesdon",
      prix: 6.99,
      latin: 'Liquidambar Styraciflua Worplesdon',
      detail: '40/45 cm P9',
      img: 'https://www.jardins-du-monde.be/2262-thickbox_default/copalme-d-amerique-worplesdon.jpg',
      type: 'arbre'
    },
    {
      nom: 'Tileul de Mongolie',
      prix: 26.00,
      latin: 'Tilia mongolica',
      detail: '120/130 cm pot 2L',
      img: 'https://www.jardins-du-monde.be/3850-thickbox_default/tilleul-de-mongolie.jpg',
      type: 'arbre'
    },

    //Arbustes

    {
      nom: 'Magnolia étoilé',
      prix: 7.55,
      latin: 'Magnolia kobus Stelatta',
      detail: '60/70 cm P9',
      img: 'https://www.jardins-du-monde.be/1752-thickbox_default/magnolia-etoile.jpg',
      type: 'arbuste'
    },
    {
      nom: 'Magnolia de Kobé',
      prix: 7.75,
      latin: 'Magnolia Kobus',
      detail: '60/70cm P9',
      img: 'https://www.jardins-du-monde.be/2856-thickbox_default/magnolia-de-kobe.jpg',
      type: 'arbuste'
    },
    {
      nom: 'Magnolia Loeberni Leonard Messel',
      prix: 6.80,
      latin: 'Magnolia Loeberni Leonard Messel',
      detail: '50/60 pot Ø 12cm',
      img: 'https://www.jardins-du-monde.be/683-thickbox_default/magnolia-loebneri-leonard-messel.jpg',
      type: 'arbuste'
    },
    {
      nom: 'Cornouiller',
      prix: 6.99,
      latin: 'Cornus Mas',
      detail: '50/60 cm pot 1L',
      img: 'https://www.jardins-du-monde.be/1552-thickbox_default/cornouiller.jpg',
      type: 'arbuste'
    },
    {
      nom: 'Cognassier du Japon',
      prix: 6.25,
      latin: 'Chaenomeles Japonica',
      detail: '40/60 cm pot 1L',
      img: 'https://www.jardins-du-monde.be/2881-thickbox_default/cognassier-du-japon.jpg',
      type: 'arbuste'
    },
    {
      nom: 'Weigelia panaché nain',
      prix: 6.15,
      latin: 'Weigela Florida Nana Variegata',
      detail: '40/60 cm pot 1L',
      img: 'https://www.jardins-du-monde.be/578-thickbox_default/weigelia-panache-nain.jpg',
      type: 'arbuste'
    },
    {
      nom: 'Deutzie Gracilis',
      prix: 5.31,
      latin: 'Deutzie Gracilis',
      detail: '40/50 cm pot 1L',
      img: 'https://www.jardins-du-monde.be/485-thickbox_default/deutzia-gracilis.jpg',
      type: 'arbuste'
    },
    {
      nom: 'Seringat Snowbelle',
      prix: 6.25,
      latin: 'Philadelphus virginalis Snowbelle',
      detail: '40/60 cm pot 1L',
      img: 'https://www.jardins-du-monde.be/3116-thickbox_default/seringat-snowbelle.jpg',
      type: 'arbuste'
    },

    //Fruitier
    {
      nom: 'Arbre aux haricots bleus',
      prix: 17.99,
      latin: 'Decaisnea Fargesii',
      detail: '70/80 cm pot 1L',
      img: 'https://www.jardins-du-monde.be/1503-thickbox_default/arbre-aux-haricots-bleus.jpg',
      type: 'fruitier'
    },
    {
      nom: 'Pommier Elstar',
      prix: 9.59,
      latin: 'Malus domestica Elstar',
      detail: '50/60 cm pot 1L (plant greffé)',
      img: 'https://www.jardins-du-monde.be/2549-thickbox_default/pommier-elstar.jpg',
      type: 'fruitier'
    },
    {
      nom: 'Pommier Fiesta® ',
      prix: 9.99,
      latin: 'Malus domestica Fiesta',
      detail: '60/80cm pot 1L (plant greffé)',
      img: 'https://www.jardins-du-monde.be/1605-thickbox_default/pommier-fiesta.jpg',
      type: 'fruitier'
    },
    {
      nom: 'Pommier Granny Smith',
      prix: 9.59,
      latin: 'Malus domestica Granny Smith',
      detail: '50/60 cm 1L (plant greffé)',
      img: 'https://www.jardins-du-monde.be/1636-thickbox_default/pommier-granny-smith.jpg',
      type: 'fruitier'
    },
    {
      nom: 'Pommier Greensleeves',
      prix: 9.59,
      latin: 'Malus domestica Greensleeves',
      detail: '50/60 cm 1L (plant greffé)',
      img: 'https://www.jardins-du-monde.be/1733-thickbox_default/pommier-greensleeves.jpg',
      type: 'fruitier'
    },
    {
      nom: 'Pommier Red Devil',
      prix: 12.99,
      latin: 'Malus domestica Red Devil',
      detail: '50/60 cm pot 1L',
      img: 'https://www.jardins-du-monde.be/2551-thickbox_default/pommier-red-devil.jpg',
      type: 'fruitier'
    },
    {
      nom: 'Pommier Santana®',
      prix: 14.59,
      latin: 'Malus domestica Santana®',
      detail: '70/80 cm en pot 1L',
      img: 'https://www.jardins-du-monde.be/2123-thickbox_default/pommier-santana.jpg',
      type: 'fruitier'
    },
    {
      nom: 'Pommier Braeburn',
      prix: 9.59,
      latin: 'Malus domestica Braeburn',
      detail: '40/50 cm pot 1L',
      img: 'https://www.jardins-du-monde.be/2544-thickbox_default/pommier-braeburn.jpg',
      type: 'fruitier'
    }
  ])




  return (
    <div className="App">
      <div className='cardsmap'>
        {item.map((item) => (<Cards image={item.img} name={item.nom} latin={item.latin} detail={item.detail} prix={item.prix} />))}
      </div>
    </div>

  );
}

export default App;
