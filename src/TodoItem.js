import React from 'react'
import './scss/TodoItem.scss';

function TodoItem(props) {
	const checkedItem = (id) => {

		const item = document.getElementById(id);

		const itemCheck = item.firstChild.childNodes[0];
		const itemText = item.childNodes[1];

		console.log(itemCheck.checked);
		itemText.classList.toggle('Item_text--completed');

		/* console.log(itemCheck);
		console.log(itemText); */
	}

	return (
		<li id={props.id} className='Item'>
			<div className='Item_check'>
				<input type='checkbox' id={`#${props.id}`} onChange={() => checkedItem(props.id)} />
				<label htmlFor={`#${props.id}`}></label>
			</div>
			<p className={'Item_text'}>{props.text}</p>
			<span className='Item_close'>&#x2715;</span>
		</li>
	)
}
export { TodoItem };