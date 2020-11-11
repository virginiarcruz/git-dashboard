// @ts-nocheck
import React, { createContext, useState } from 'react';
import { AppContextInterface } from '../interfaces/PullRequests';

const AppContext = createContext<AppContextInterface>(
  {} as AppContextInterface,
);

export const AppProvider: React.FC = ({ children }) => {
  const [repo, setRepo] = useState();
  const [configValue, setConfigValue] = useState({});

  return (
    <AppContext.Provider value={{ configValue, setConfigValue, repo, setRepo }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
