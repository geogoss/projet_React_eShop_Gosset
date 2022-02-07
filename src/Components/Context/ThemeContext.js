import React, {createContext, useState} from "react";

// création d'un context
export const ThemeContext = createContext();

// création d'un composant qui va contenir le state
const ThemeContextProvider = props => {

        const [theme, setTheme] = useState(false)

        const toggleTheme = () => {
            setTheme(!theme)    
        }

        if (theme) {
            document.body.classList.add("dark-body");
        }else {
            document.body.classList.remove("dark-body");
        }
            
        // ThemeContextProvider provient de la création de notre context 
        // Un provider c'est ce qui va apporter les données, les props, dans toute notre application
        // props.children, tous les enfants englobé seront dans props.children
        return (
            <ThemeContext.Provider value={{toggleTheme, theme}}>
                {props.children}
            </ThemeContext.Provider>
        )

}

export default ThemeContextProvider;