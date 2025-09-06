import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({children})=>{
    const [isLoggedIn,setLoggedIn] = useState(localStorage.getItem('isLoggedIn'));
    
    useEffect(()=>{
      {!isLoggedIn && localStorage.setItem('isLoggedIn',false)}
    },[])
    
    return <LoginContext.Provider value={[isLoggedIn,setLoggedIn]}>{children}</LoginContext.Provider>
}