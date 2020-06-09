import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import Top from './pages/Top';
import GlobalStyle, { loadFonts } from './GlobalStyle';
import { GlobalStateProvider } from './GlobalState';

const App: FC = () => {
  return (
    <>
      <GlobalStateProvider>
        <GlobalStyle />
        <Top />
      </GlobalStateProvider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'), loadFonts);
