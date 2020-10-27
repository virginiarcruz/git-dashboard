import React from 'react';
import GlobalStyle from './styles/globalTheme';

const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>Git Dashboard</p>
        </header>
      </div>
      <GlobalStyle />
    </>
  );
};

export default App;
