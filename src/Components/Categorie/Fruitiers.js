import React from 'react';
import Cards from '../cards/cards';
import { useState } from 'react';

export default function Fruitiers(props) {

  const [fruitier, setFruitier] = useState([
    //Fruitier
    {
      nom: 'Arbre aux haricots bleus',
      prix: 17.99,
      argent: 17.99,
      latin: 'Decaisnea Fargesii',
      detail: '70/80 cm pot 1L',
      img: 'https://www.jardins-du-monde.be/1503-thickbox_default/arbre-aux-haricots-bleus.jpg',
      type: 'fruitier'
    },
    {
      nom: 'Pommier Elstar',
      prix: 9.59,
      argent: 9.59,
      latin: 'Malus domestica Elstar',
      detail: '50/60 cm pot 1L (plant greffé)',
      img: 'https://www.jardins-du-monde.be/2549-thickbox_default/pommier-elstar.jpg',
      type: 'fruitier'
    },
    {
      nom: 'Pommier Fiesta® ',
      prix: 9.99,
      argent: 9.99,
      latin: 'Malus domestica Fiesta',
      detail: '60/80cm pot 1L (plant greffé)',
      img: 'https://www.jardins-du-monde.be/1605-thickbox_default/pommier-fiesta.jpg',
      type: 'fruitier'
    },
    {
      nom: 'Pommier Granny Smith',
      prix: 9.59,
      argent: 9.59,
      latin: 'Malus domestica Granny Smith',
      detail: '50/60 cm 1L (plant greffé)',
      img: 'https://www.jardins-du-monde.be/1636-thickbox_default/pommier-granny-smith.jpg',
      type: 'fruitier'
    },
    {
      nom: 'Pommier Greensleeves',
      prix: 9.59,
      argent: 9.59,
      latin: 'Malus domestica Greensleeves',
      detail: '50/60 cm 1L (plant greffé)',
      img: 'https://www.jardins-du-monde.be/1733-thickbox_default/pommier-greensleeves.jpg',
      type: 'fruitier'
    },
    {
      nom: 'Pommier Red Devil',
      prix: 12.99,
      argent: 12.99,
      latin: 'Malus domestica Red Devil',
      detail: '50/60 cm pot 1L',
      img: 'https://www.jardins-du-monde.be/2551-thickbox_default/pommier-red-devil.jpg',
      type: 'fruitier'
    },
    {
      nom: 'Pommier Santana®',
      prix: 14.59,
      argent: 14.59,
      latin: 'Malus domestica Santana®',
      detail: '70/80 cm en pot 1L',
      img: 'https://www.jardins-du-monde.be/2123-thickbox_default/pommier-santana.jpg',
      type: 'fruitier'
    },
    {
      nom: 'Pommier Braeburn',
      prix: 9.59,
      argent: 9.59,
      latin: 'Malus domestica Braeburn',
      detail: '40/50 cm pot 1L',
      img: 'https://www.jardins-du-monde.be/2544-thickbox_default/pommier-braeburn.jpg',
      type: 'fruitier'
    }

])


  return (
    <div className='cardsmap d-flex flex-wrap justify-content-around'>
      {fruitier.map((item, i) => (<Cards key={i} achat={() => { props.acheter(i) }} image={item.img} name={item.nom} latin={item.latin} detail={item.detail} prix={item.prix} />))}
    </div>
  );
}
