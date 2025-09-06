import { createContext, useEffect, useState } from "react";

export const LangContext = createContext();

export const LangProvider = ({children})=>{
  const [lang,setLang] = useState(localStorage.getItem('lang'));
  
  useEffect(()=>{
    const lang = localStorage.getItem('lang');

    lang==='EN'?document.getElementById('language').value='EN':
    lang==='AZ'?document.getElementById('language').value='AZ':
    localStorage.setItem('lang','EN');
  },[])
  
  return <LangContext.Provider value={[lang,setLang]}>{children}</LangContext.Provider>
}