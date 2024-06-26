import React, { useState } from 'react';
import TabNavigator from './navigation/TabNavigator';
import { ThemeProvider } from 'styled-components/native';
import LightTheme from './themes/LightTheme';
import DarkTheme from './themes/DarkTheme';

export default function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <TabNavigator toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}
