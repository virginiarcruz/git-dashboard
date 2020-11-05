import React, { createContext, useCallback, useState } from 'react';
import { useQuery } from '@apollo/client';
import { AppContextInterface } from '../interfaces/PullRequests';

import { GET_DATA } from '../graphql';

const AppContext = createContext<AppContextInterface>(
  {} as AppContextInterface,
);

export const AppProvider: React.FC = ({ children }) => {
  const { loading, data } = useQuery(GET_DATA);
  const [repo, setRepo] = useState();
  const configValue = { loading, data };

  // const getRepo = useCallback(() => {
  //   setRepo('text-test');
  //   localStorage.setItem('@GitDashboard: repo', repo);
  //   console.log('repo context', repo);
  // }, [repo]);

  return (
    <AppContext.Provider value={{ configValue, repo, setRepo }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
