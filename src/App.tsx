// @ts-nocheck

import React from 'react';
import GlobalStyle from './styles/globalTheme';
import { AppProvider } from './context/AppContext';

import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Home />
      <GlobalStyle />
    </AppProvider>
  );
};

export default App;
