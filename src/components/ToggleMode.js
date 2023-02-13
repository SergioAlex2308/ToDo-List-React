import React from 'react';

/* import './ToggleLan.scss'; */

function ToggleLan() {

  return (
    <div className='switch'>
      <label className='light'>Light</label>
      <label className='switch_input'>
        <input type='checkbox' />
        <span className='switch_slider round'></span>
      </label>
      <label className='light'>Dark</label>
    </div>
  )
}

export { ToggleLan };