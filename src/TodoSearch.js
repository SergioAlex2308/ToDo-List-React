import React from 'react';

import './scss/TodoSearch.scss';

function TodoSearch() {
  return (
    <form id='bar'>
      <input type='search' className='bar_input' placeholder="Create a new ToDo..." />
      <button className='bar_button'>Add</button>
    </form>
  )
}

export { TodoSearch };