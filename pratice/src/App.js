import React from 'react';
import './App.css';
import Header from "./components/Header.js";
import { useState,createContext } from "react";
import ComA from "./components/ComA.js";

const AppState = createContext();
// const AppState1 = createContext();


function App() {
  const [data,setData] = useState("aadi here you go");
  const [val,setval] = useState({name:"ash",age:"22"});

  return (
   
    
       <>
       
      <AppState.Provider value={{data,val}}>
       <Header />
       <ComA  />
       </AppState.Provider>
      </>
   
   
   
  );
}

export default App;
export {AppState};
