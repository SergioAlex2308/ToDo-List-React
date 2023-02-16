import React from 'react';
import { ThemeContext, themes } from '../context/theme';

function ToggleMode() {

  const [darkMode, setDarkMode] = React.useState(false);

  return (

    <div className='switch'>
      <label className='light'>Light</label>
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <label className='switch_input'>
            <input type='checkbox' onChange={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }} />
            <span className='switch_slider round'></span>
          </label>
        )}
      </ThemeContext.Consumer>
      <label className='light'>Dark</label>
    </div>
  )
}

export { ToggleMode };