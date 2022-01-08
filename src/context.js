import React, { useState, useContext, useEffect } from 'react'
const AppContext = React.createContext()


const AppProvider = ({ children }) => {
  
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }