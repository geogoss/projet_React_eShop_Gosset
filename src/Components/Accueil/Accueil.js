import React from 'react';
import Cards from '../cards/cards';

export default function Accueil(props) {
  return (
      <div className='cardsmap d-flex flex-wrap justify-content-around'>
        {props.item.map((item, i) => (<Cards key={i} achat={() => {props.acheter(item)}} image={item.img} name={item.nom} latin={item.latin} detail={item.detail} prix={item.prix} />))}
      </div>
  );
}
