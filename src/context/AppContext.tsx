// @ts-nocheck
import React, { createContext, useCallback, useEffect, useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import { AppContextInterface } from '../interfaces/PullRequests';

import { GET_DATA } from '../graphql';

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
