import React from 'react'
import './scss/TodoCounter.scss';

function TodoCounter(props) {
	return (
		<div className='TodoCounter'>
			<p>{props.quantity} items</p>
			<div className='TodoCounter_selector'>
				<p className='active'>All</p>	
				<p>Active</p>	
				<p>Completed</p>	
			</div>
		</div>
	)
}

export { TodoCounter };
