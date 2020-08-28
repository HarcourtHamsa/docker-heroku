import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  return (
    <AppContext.Provider
      value={[isAuthenticated, setIsAuthenticated, userDetails, setUserDetails]}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
