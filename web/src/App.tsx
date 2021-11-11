import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bot from './Pages/Bot';
import Home from './Pages/Home';
import GlobalStyle from './GlobalStyle';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bot" element={<Bot />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
