import { useContext, createContext, useState } from 'react';

const DarkModeContext = createContext(); //Creo mi contexto
export const useDarkModeContext = () => useContext(DarkModeContext); // Permite utilizar mi contexto sin importarlo

//Crea proveedor del contexto
export const DarkModeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false); //El estado inicial del darkMode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('darkMode');
    } else {
      document.body.classList.remove('darkMode');
    }
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

// Se podría exportar cada uno aquí
// export {useDarkModeContext, DarkModeProvider}
