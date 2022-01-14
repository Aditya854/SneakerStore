import React, { useState, useContext, useEffect } from 'react';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    showitems();
  }, []);

  const showitems = async () => {
    const response = await fetch(`http://localhost:5000/itmes`);
    const data = await response.json();
    setShoes(data);
  };
  return (
    <AppContext.Provider value={{ shoes, setShoes }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
