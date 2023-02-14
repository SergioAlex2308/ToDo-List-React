import React from 'react'
import { TodoContext } from '../context';
/* import './TodoCounter.scss'; */

function TodoCounter() {

	const { totalTodos, setFilter } = React.useContext(TodoContext);
	let { filterType } = React.useContext(TodoContext);

	function getFilter(id) {
		const getSelector = document.querySelector(`#\\${id}`);
		const selector = document.querySelector('.TodoCounter_selector');
		const selectorChilds = [...selector.childNodes];

		selectorChilds.map(child => child.classList.remove('active'));
		getSelector.classList.add('active');

		filterType = getSelector.id;
		setFilter(filterType);
		
	}

	return (
		<div className='TodoCounter'>
			<p>{totalTodos} Items</p>
			<div className='TodoCounter_selector'>
				<p id='_all' className='active' onClick={(e) => getFilter(e.target.id)}>All</p>
				<p id='_active' onClick={(e) => getFilter(e.target.id)}>Active</p>
				<p id='_completed' onClick={(e) => getFilter(e.target.id)}>Completed</p>
			</div>
		</div>
	)
}

export { TodoCounter };
