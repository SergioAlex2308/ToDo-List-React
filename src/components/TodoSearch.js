import React from 'react';
import { TodoContext } from '../context';

/* import './TodoSearch.scss'; */

function TodoSearch() {

  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <form id='bar'>
      <div className='bar_button'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3A5AB9" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="10" cy="10" r="7" fill='none'/>
          <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
      </div>
      <input type='search' className='bar_input' placeholder="Create a new ToDo..." value={searchValue} onChange={onSearchValueChange} />
    </form>
  )
}

export { TodoSearch };