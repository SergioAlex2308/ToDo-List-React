import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './theme';

function ThemeContextWrapper(props) {

  const [theme, setTheme] = useState(themes.light);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.dark:
        document.body.classList.add('dark');
        break;
      case themes.light:
      default:
        document.body.classList.remove('dark');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export {ThemeContextWrapper}