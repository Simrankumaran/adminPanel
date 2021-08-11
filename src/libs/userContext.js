import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loginRes, setLoginRes] = useState("");

  return (
    <UserContext.Provider
      value={{
        loginRes,
        setLoginRes,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
