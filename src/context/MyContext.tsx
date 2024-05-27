// src/context/MyContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';

interface MyContextProps {
  // Add your context properties here
}

const MyContext = createContext<MyContextProps | null>(null);

export const MyProvider = ({ children }: { children: ReactNode }) => {
  const value: MyContextProps = {
    // Initialize your context values here
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (context === null) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};
