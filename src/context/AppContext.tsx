// @ts-nocheck
import React, { createContext, useCallback, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { AppContextInterface } from '../interfaces/PullRequests';

import { GET_DATA } from '../graphql';

const AppContext = createContext<AppContextInterface>(
  {} as AppContextInterface,
);

export const AppProvider: React.FC = ({ children }) => {
  const [repo, setRepo] = useState();

  const regExpRepoName = /[a-z0-9]+(?:(?:(?:[._]|__|[-]*)[a-z0-9]+)+)?/g;
  const repoName = repo?.match(regExpRepoName);

  console.log('repo context', repoName);

  const params = { owner: 'atom', name: 'github' };

  const { loading, data } = useQuery(GET_DATA, {
    variables: params,
  });

  const configValue = { loading, data };

  console.log('data', data);

  return (
    <AppContext.Provider value={{ configValue, repo, setRepo }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
