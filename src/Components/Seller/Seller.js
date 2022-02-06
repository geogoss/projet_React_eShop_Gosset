import React from 'react';
import Cards from '../cards/cards';
import { useState } from 'react';

export default function Seller(props) {

 const [cactus, setCactus] = useState([
    {
      nom: 'Chaudasse non-binaire',
      prix: 99.99,
      latin: 'Meretrix',
      detail: 'Pack premium 170cm 65kg',
      img: 'https://image.freepik.com/photos-gratuite/jeune-femme-sexy-robe-blanche-allongee-tronc-arbre-au-dessus-eau-jour-ete-nature-verte_212944-2699.jpg'
    },
    {
      nom: 'Cactus mâle Alpha',
      prix: 0,
      latin: 'Aspera Cactus',
      detail: "C'est reparti comme en 46",
      img: 'https://cdn.discordapp.com/attachments/917719419986251846/939136364425904158/unknown.png'
    },
    {
      nom: 'Chaud du cul',
      prix: 99.99,
      latin: 'Culus Tuus Foetet',
      detail: 'Prend le mon reuf',
      img: 'https://previews.123rf.com/images/bogdanhoda/bogdanhoda1408/bogdanhoda140800038/30540044-mod%C3%A8le-de-beau-m%C3%A2le-qui-transporte-des-billes-du-bois-de-coupe-et-pose.jpg'
    }
  ]);

  return (
    <div className='cardsmap d-flex flex-wrap justify-content-around'>
        {cactus.map((cactus, i) => (<Cards key={i} achat={() => {props.acheterCactus(i)}} image={cactus.img} name={cactus.nom} latin={cactus.latin} detail={cactus.detail} prix={cactus.prix} />))}
      </div>
  );
}
