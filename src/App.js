import Navbar from "./Components/Navbar/Navbar";
import {Routes, Route} from 'react-router-dom';
import { useState } from "react";
import Accueil from "./Accueil/Accueil";
import Seller from "./Seller/Seller";
import Cadeaux from "./Cadeaux/Cadeaux"
import Contact from "./Contact/Contact";
import Categorie from "./Categorie/Categorie";
import Arbres from "./Categorie/Arbres";
import Arbustes from "./Categorie/Arbustes";
import Fruitiers from "./Categorie/Fruitiers";
import ModalCompte from "./Components/ModalCompte/ModalCompte";
import ModalCompte2 from "./Components/ModalCompte/ModalCompte2";
import Panier from "./Components/Panier/Panier";
import ModalReduction from "./Components/Panier/ModalReduction";


function App() {

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

// Panier => toggle bouton reduction
const [toggleReduction, setToggleReduction] = useState(false)
const switchReduction = () => {
  setToggleReduction(!toggleReduction)
}

// Panier => reduction => modal
const [toggleModalReduction, setToggleModalReduction] = useState(false)
const switchModalReduction =() => {
  setToggleModalReduction(!toggleModalReduction)
}


 // Les useState
  // Mon argent
  const [argent, setArgent] = useState(25)

  // argent total
  const [argentTotal, setArgentTotal] = useState(125)
  const appliquerReduction = () => {
    setArgentTotal(argentTotal - argentTotal*10/100)
  }
    let argentHtva = argentTotal - argentTotal*21/100;


  // le panier
  const [panier, setPanier] = useState([])

  // les articles en tant qu'objet dans un tableau pour avoir facile à les récupérer
  // const [articles, setArticles] = useState([
  //   { nom: "Crayons de couleur", prix: 15, unite: 4, img: imgCrayon },
  //   { nom: "Chaise de bureau", prix: 138, unite: 2, img: imgChaise },
  //   { nom: "Rangement crayons", prix: 42, unite: 3, img: imgPot },
  //   { nom: "Agenda", prix: 17, unite: 10, img: imgAgenda },
  //   { nom: "Classeur", prix: 9, unite: 10, img: imgClasseur }
  // ])


  return (
    <div className="App">
      <div>
      {toggleModalReduction && <ModalReduction modalReductionOnOf={switchModalReduction} />}
      {toggleCompte && <ModalCompte modalSecondOn={switchCompteSecond} modalOf={switchCompte} />}
      {toggleCompteSecond && <ModalCompte2 modalOf={switchCompteSecond} />}

      <Navbar modalOn={switchCompte} />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/cadeaux" element={<Cadeaux />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categorie" element={<Categorie />}>
            <Route path="/categorie/arbres" element={<Arbres />} />
            <Route path="/categorie/arbustes" element={<Arbustes />} />
            <Route path="/categorie/fruitiers" element={<Fruitiers />} />
          </Route>
          <Route path="/panier" element={<Panier appliquerReduction={appliquerReduction} modalReductionOnOf={switchModalReduction} argentHtva={argentHtva} argentTotal={argentTotal} argent={argent} toggleReduction={toggleReduction} reductionOnOf={switchReduction} />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
