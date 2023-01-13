import React, { useState, createContext } from "react";

export const FilterContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [text, setState] = useState("yo");
  return (
    <FilterContext.Provider value={{ text }}>{children}</FilterContext.Provider>
  );
};

export default ContextProvider;
