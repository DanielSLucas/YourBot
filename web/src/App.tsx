import React, { useCallback, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { FiMoon, FiSun } from 'react-icons/fi';
import Bot from './Pages/Bot';
import Home from './Pages/Home';
import GlobalStyle, { Button } from './GlobalStyle';
import defaultTheme from './styles/themes/default';
import darkTheme from './styles/themes/dark';

const App: React.FC = () => {
  const [theme, setTheme] = useState(defaultTheme);

  const handleThemeChange = useCallback(() => {
    setTheme(state => (state.name === 'default' ? darkTheme : defaultTheme));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Button type="button" onClick={handleThemeChange}>
        {theme.name === 'default' ? <FiSun /> : <FiMoon />}
      </Button>
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
