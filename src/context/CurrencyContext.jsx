import { createContext, useEffect, useState } from "react";

export const CurrencyContext = createContext();

export const CurrencyProvider = ({children})=>{
  const [currency,setCurr] = useState(localStorage.getItem('curr'));
  // const [currSymbol,setSymbol] = useState('$');
  
  useEffect(()=>{
    const curr = localStorage.getItem('curr');

    curr==='USD'?document.getElementById('currency').value='USD':
    curr==='AZN'?document.getElementById('currency').value='AZN':
    localStorage.setItem('curr','USD');
    
    // curr==='USD'?setSymbol('$'):
    // curr==='AZN'?setSymbol('m'):setSymbol('$');
  },[])
  
  return <CurrencyContext.Provider value={[currency,setCurr]}>{children}</CurrencyContext.Provider>
}