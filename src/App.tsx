import React from 'react';
import { useQuery } from '@apollo/client';
import GlobalStyle from './styles/globalTheme';
import AppContext from './context/AppContext';
import { AppContextInterface } from './interfaces/PullRequests';

import { GET_DATA } from './graphql';

import Home from './pages/Home';

const App: React.FC = () => {
  const { loading, data } = useQuery(GET_DATA);

  const configValue = {
    loading,
    data,
  };

  return (
    <AppContext.Provider value={configValue}>
      <Home />
      <GlobalStyle />
    </AppContext.Provider>
  );
};

export default App;
