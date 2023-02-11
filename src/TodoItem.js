import React from 'react'
import './scss/TodoItem.scss';

function TodoItem({ id, setStatus, statusItem, text}) {
	const checkedItem = (id, setStatus, statusItem) => {

		const item = document.getElementById(id);

		const itemCheck = item.firstChild.childNodes[0];
		const itemText = item.childNodes[1];

		statusItem = itemCheck.checked;
		itemText.classList.toggle('Item_text--completed');
		setStatus(statusItem);
		
	}

	return (
		<li id={id} className='Item'>
			<div className='Item_check'>
				<input type='checkbox' id={`#${id}`} onChange={() => checkedItem(id, setStatus, statusItem)} />
				<label htmlFor={`#${id}`}></label>
			</div>
			<p className={'Item_text'}>{text}</p>
			<span className='Item_close'>&#x2715;</span>
		</li>
	)
}
export { TodoItem };