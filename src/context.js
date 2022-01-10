import React, { useState, useContext } from 'react'
const AppContext = React.createContext()


const AppProvider = ({ children }) => {
  const [form, setForm] = useState(false);
  return (
    <AppContext.Provider value={{form,setForm}}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }