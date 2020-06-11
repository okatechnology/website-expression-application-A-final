import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import Top from './pages/Top';
import GlobalStyle, { loadFonts } from './GlobalStyle';
import { GlobalStateProvider } from './GlobalState';
import { WidthProvider } from './WidthProvider';

const App: FC = () => {
  return (
    <>
      <WidthProvider>
        <GlobalStateProvider>
          <GlobalStyle />
          <Top />
        </GlobalStateProvider>
      </WidthProvider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'), loadFonts);
