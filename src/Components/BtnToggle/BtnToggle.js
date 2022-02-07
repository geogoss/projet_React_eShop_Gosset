import React, { useContext } from 'react';
import "./BtnToggle.css"
import {ThemeContext} from '../Context/ThemeContext'



export default function BtnToggle() {


    const {toggleTheme, theme} = useContext(ThemeContext)


  return <div>
      <button 
      onClick={toggleTheme} 
      className= {theme ? 'btnToggle' : 'btnToggle darkBtn'}>{theme ? "Light" : "Dark"}</button>
  </div>;
}
