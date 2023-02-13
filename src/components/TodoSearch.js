import React from 'react';

/* import './TodoSearch.scss'; */

function TodoSearch({ searchValue, setSearchValue }) {

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <form id='bar'>
      <input type='search' className='bar_input' placeholder="Create a new ToDo..." value={searchValue} onChange={onSearchValueChange} />
      <button className='bar_button'>Add</button>
    </form>
  )
}

export { TodoSearch };