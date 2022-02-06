import React from 'react';
import Cards from '../cards/cards';
import { useState } from 'react';

export default function Arbustes(props) {


  return (
    <div className='cardsmap d-flex flex-wrap justify-content-around'>
      {props.item.map((item, i) => {
      
        if (item.type.includes(props.element)) {
           
          return <Cards 
          key={i} 
          achat={() => { props.acheter(i) }} 
          image={item.img} 
          name={item.nom} 
          latin={item.latin} 
          detail={item.detail} 
          prix={item.prix} 
          />
      }
      })}
    </div>
  );
}
