// src/context/MyContext.tsx
import React, { createContext, useContext, ReactNode, useState } from 'react';

interface MyContextProps {
  value: string;
  setValue: (value: string) => void;
}

const MyContext = createContext<MyContextProps | undefined>(undefined);

export const MyContextProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState('default value');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};
