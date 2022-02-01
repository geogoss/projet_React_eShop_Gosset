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


  return (
    <div className="App">
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
        </Routes>
    </div>
  );
}

export default App;
