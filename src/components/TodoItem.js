import React from 'react'
/* import './TodoItem.scss'; */

function TodoItem({ id, text, onComplete, completed, onDelete}) {

	return (
		<li id={id} className='Item'>
			<div className='Item_check'>
				<input type='checkbox' id={`#${id}`} onChange={onComplete} checked={completed} />
				<label htmlFor={`#${id}`}></label>
			</div>
			<p className={completed ? 'Item_text--completed' : 'Item_text'}>{text}</p>
			<span className='Item_close' onClick={onDelete}>&#x2715;</span>
		</li>
	)
}
export { TodoItem };