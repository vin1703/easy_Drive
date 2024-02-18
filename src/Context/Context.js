import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [token,setToken] = useState(null);
    const [isSign,setIsSign] = useState(null);
    const [score,setScore] = useState(0);

    const handleSignUp = async(user) =>{
        // console.log(user);
         setIsSign(user);
    }
    const handleScore = (score) => {
      
      setScore((prev)=>{
        return prev+score;
      })
    }

    const handleToken=async(token)=>{
      setToken(token);
    }

  return (
    <AppContext.Provider value={{isSign,handleSignUp,score,handleScore,handleToken,token}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
