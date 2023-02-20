import React from 'react';
import { ThemeContext, themes } from '../context/theme';

function ToggleMode({ darkMode, setDarkMode }) {

  return (
    <div className='switch'>
      <label className='switch_text'>Light</label>
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <label className='switch_input'>
            <input id='toggleCheck' type='checkbox' onChange={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }} />
            <span className='switch_slider round'></span>
          </label>
        )}
      </ThemeContext.Consumer>
      <label className='switch_text'>Dark</label>
    </div>
  )
}

export { ToggleMode };