import React from 'react';
import Cards from '../cards/cards';


export default function Detail(props) {
  return (
    <div>
      <h1 className='text-center m-5'>Choisissez une carte dans <span>Accueil</span> pour avoir des détails</h1>
      <div>
        <div className='cardsmap d-flex flex-wrap justify-content-around'>
          {props.item.map((item, i) => {

            if (item.nom.includes(props.monChoix)) {

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

      </div>
    </div>

  );
}
