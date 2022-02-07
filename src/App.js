import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Accueil from "./Components/Accueil/Accueil";
import Seller from "./Components/Seller/Seller";
import Admin from "./Components/Admin/Admin"
import Contact from "./Components/Contact/Contact";
import Categorie from "./Components/Categorie/Categorie";
import Arbres from "./Components/Categorie/Arbres";
import Arbustes from "./Components/Categorie/Arbustes";
import Fruitiers from "./Components/Categorie/Fruitiers";
import ModalCompte from "./Components/ModalCompte/ModalCompte";
import ModalCompte2 from "./Components/ModalCompte/ModalCompte2";
import Panier from "./Components/Panier/Panier";
import ModalReduction from "./Components/Panier/ModalReduction";
import Footer from "./Components/Footer/footer";
import { useNavigate } from "react-router-dom";
import Detail from "./Components/Accueil/Detail";
import ModalPayer from "./Components/Panier/ModalPayer";
import ThemeContextProvider from "./Components/Context/ThemeContext";



function App() {



  // Geoffrey -----------------------------------------------------------

  // Les Toggle
  // Modal 1 Mon compte
  const [toggleCompte, setToggleCompte] = useState(false)
  const switchCompte = () => {
    setToggleCompte(!toggleCompte)
  }
  // Modal 2 Mon compte
  const [toggleCompteSecond, setToggleCompteSecond] = useState(false)
  const switchCompteSecond = () => {
    setToggleCompteSecond(!toggleCompteSecond)
  }
  // Modal Payer => Panier
  const [togglePayer, setTogglePayer] = useState(false)
  const switchPayer = () => {
    setTogglePayer(!togglePayer)
  }
  // Panier => toggle bouton reduction
  const [toggleReduction, setToggleReduction] = useState(false)
  const switchReduction = () => {
    setToggleReduction(!toggleReduction)
  }
  // Panier => reduction => modal
  const [toggleModalReduction, setToggleModalReduction] = useState(false)
  const switchModalReduction = () => {
    setToggleModalReduction(!toggleModalReduction)
  }


  // Les useState
  // Mon argent
  const [argent, setArgent] = useState(0)

  // argent total
  const [argentTotal, setArgentTotal] = useState(0)

  // réduction avec le code réduction
  const appliquerReduction = () => {
    setArgentTotal(argentTotal - argentTotal * 10 / 100)
  }
  // prix HTVA
  let argentHtva = argentTotal - argentTotal * 21 / 100;

  // le panier => un tableau
  const [monPanier, setMonPanier] = useState([])


  // Opération acheter
  let acheter = (i) => {
    // copie des useState => variables temporaires
    let copieArgentTotal = argentTotal;
    // Action
    copieArgentTotal += item[i].prix
    item[i].panier = 1
    monPanier.unshift(item[i]);
    // update les useState
    setArgentTotal(copieArgentTotal);
  };

  let acheterCactus = (i) => {
    // copie des useState => variables temporaires
    let copieArgentTotal = argentTotal;
    // Action
    copieArgentTotal += cactus[i].prix
    cactus[i].panier = 1
    monPanier.unshift(cactus[i]);
    // update les useState
    setArgentTotal(copieArgentTotal);
  };


  // Pour supprimer un panier
  const navigate = useNavigate()
  let supprimer = (i) => {
    // copie des useState => variables temporaires
    let copieMonPanier = monPanier;
    // action
    copieMonPanier.splice(i, 1);

    // update les useState
    setMonPanier(copieMonPanier);
    navigate("/panier")
  };

  // Pour supprimer tous les panier => bouton payer dans modal
  const viderPanier = () => {
    // copie des useState => variables temporaires
    let copieMonPanier = monPanier;
    let copieArgentTotal = argentTotal;
    // action
    copieMonPanier.splice(0, copieMonPanier.length);
    copieArgentTotal = 0
    // update les useState
    setMonPanier(copieMonPanier);
    setArgentTotal(copieArgentTotal);

  }


  const essai = (nbr) => {
    setArgentTotal(argentTotal + nbr)
  }
  const essaimoins = (nbr) => {
    setArgentTotal(argentTotal - nbr)
  }

  // Donnée pour récupérer le type (arbre, arbuste ou fruitier) au click du titre dans catégorie
  // fonction qui récupère la donnée pour faire le map avec item.type.map.include
  const [element, setElement] = useState('');
  const changeElement = newElement => {
    setElement(newElement)
  }

  // Donnée pour récupérer le nom de la card au click du titre sur la photo d'une card
  // fonction qui récupère la donnée pour faire le map avec item.type.map.include 
  // et afficher la carte du nom de input
  const [monChoix, setMonChoix] = useState('rien');
  const changeMonChoix = newChoix => {
    newChoix = newChoix
    setMonChoix(newChoix);
  }

  // fonction pour reset le choix quand on fait appel à l'input
  const resetMonChoix = () => {
    setMonChoix('rien')
  }

  // Donnée dans laquel on va récupérer l'input
  const [text, setText] = useState(
    { text: "Choisissez une carte dans Accueil pour avoir des détails" }
  )

  // fonction pour reset le map de l'input quand on fait appel au click sur une carte
  // et qui remet la phrase text
  const resetText = () => {
    setText({ text: "Choisissez une carte dans Accueil pour avoir des détails" })
  }

  // Nassim ---------------------------------------------------------------------
  const [item, setItem] = useState([
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
      nom: "Copalme d'Europe ",
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
      prix: '0',
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


  //     //Modal pop up du panier
  // const[modalOpen, setModalOpen] = useState(false);




  return (
    <div className="App">
      <ThemeContextProvider>
        <div>
          {toggleModalReduction && <ModalReduction modalReductionOnOf={switchModalReduction} />}
          {toggleCompte && <ModalCompte modalSecondOn={switchCompteSecond} modalOf={switchCompte} />}
          {toggleCompteSecond && <ModalCompte2 modalOf={switchCompteSecond} />}
          {togglePayer && <ModalPayer viderPanier={viderPanier} modalPayerOf={switchPayer} />}

          <Navbar resetMonChoix={resetMonChoix} setText={setText} text={text.text} modalOn={switchCompte} />
          <Routes>
            <Route path="/" element={<Accueil resetText={resetText} changeMonChoix={changeMonChoix} acheter={acheter} item={item} />} />
            <Route path="/detail" element={<Detail text={text.text} monChoix={monChoix} acheter={acheter} item={item} />} />
            <Route path="/seller" element={<Seller acheterCactus={acheterCactus} />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/categorie" element={<Categorie changeElement={changeElement} />}>
              <Route path="/categorie/arbres" element={<Arbres element={element} acheter={acheter} item={item} />} />
              <Route path="/categorie/arbustes" element={<Arbustes element={element} acheter={acheter} item={item} />} />
              <Route path="/categorie/fruitiers" element={<Fruitiers element={element} acheter={acheter} item={item} />} />
            </Route>
            <Route path="/panier" element={<Panier viderPanier={viderPanier} modalPayerOn={switchPayer} supprimer={supprimer} essaiMoins={essaimoins} essai={essai} panier={monPanier} item={item} appliquerReduction={appliquerReduction} modalReductionOnOf={switchModalReduction} argentHtva={argentHtva} argentTotal={argentTotal} argent={argent} toggleReduction={toggleReduction} reductionOnOf={switchReduction} />} />
          </Routes>
        </div>
        <div>
          <Footer />

        </div>
        </ThemeContextProvider>
    </div>
  );
}

export default App;
