import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import Global from './styles/Global';
import Header from './components/Header';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme',light);
  const toggleTheme = ()=>{
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global/>
        <Header toggleTheme = {toggleTheme}/>
      </ThemeProvider>
    </>
  );
}

export default App;
