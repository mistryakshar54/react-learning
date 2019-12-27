import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({ 
    themeMode : 'dark',
    toggleTheme : () => {}
 });


 const ThemeContextProvider = ( props ) => {
    const [ themeMode , setThemeMode ] = useState("dark");
    const toggleTheme = ( themeMode ) => {
        debugger;
        setThemeMode(themeMode);
    }
    return(
        <ThemeContext.Provider  value={ { themeMode : themeMode , toggleTheme : toggleTheme } }>
            {props.children}
        </ThemeContext.Provider>
    );
 }

 export default ThemeContextProvider;