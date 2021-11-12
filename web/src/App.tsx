import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Bot from './Pages/Bot';
import Home from './Pages/Home';
import GlobalStyle from './GlobalStyle';
import defaultTheme from './styles/themes/default';
// import newPelete from './styles/themes/newPelete';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bot" element={<Bot />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
