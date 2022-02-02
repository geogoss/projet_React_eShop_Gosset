import Navbar from "./Components/Navbar/Navbar";
import {Routes, Route} from 'react-router-dom';
import { useState } from "react";
import Accueil from "./Components/Accueil/Accueil";
import Seller from "./Components/Seller/Seller";
import Cadeaux from "./Components/Cadeaux/Cadeaux"
import Contact from "./Components/Contact/Contact";
import Categorie from "./Components/Categorie/Categorie";
import Arbres from "./Components/Categorie/Arbres";
import Arbustes from "./Components/Categorie/Arbustes";
import Fruitiers from "./Components/Categorie/Fruitiers";
import ModalCompte from "./Components/ModalCompte/ModalCompte";
import ModalCompte2 from "./Components/ModalCompte/ModalCompte2";
import Panier from "./Components/Panier/Panier";
import ModalReduction from "./Components/Panier/ModalReduction";


function App() {

  // Geoffrey -----------------------------------------------------------
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

    // Nassim ---------------------------------------------------------------------



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
