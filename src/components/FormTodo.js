import React from 'react'
import { TodoContext } from '../context'

function FormTodo() {

	const [newTodoValue, setNewTodoValue] = React.useState('');

	const onChange = (e) => {
		setNewTodoValue(e.target.value);
	}

	const {
		addTodo,
	} = React.useContext(TodoContext);

	const onSubmit = (e) => {
		e.preventDefault();
		addTodo(newTodoValue);
	}
	return (
		<form onSubmit={onSubmit} id='addBar'>
			<input type='search' value={newTodoValue} onChange={onChange} className='addBar_input' placeholder="Create a new ToDo..." />
			<button type='submit' className='addBar_button'>Add</button>
		</form>
	)
}
export { FormTodo }
