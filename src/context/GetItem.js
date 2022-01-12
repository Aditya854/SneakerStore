import React from "react";
import { createContext, useState, useEffect } from "react";

const GetItem = createContext()

export const Itemprovider = ({children}) =>{

    const [item , setItem] = useState([])

    useEffect(() =>{
        showitems()
     },[])


     const showitems = async () =>{
        const response = await fetch(`http://localhost:5000/itmes`)

        const data = await response.json()

        setItem(data)
        console.log(data)
    }


    return <GetItem.Provider value={{
        item
    }}>
        {children}
    </GetItem.Provider>

}

export default GetItem
