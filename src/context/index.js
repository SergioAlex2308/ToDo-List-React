import React from "react";
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {

	const localTodoStorage = 'Todos_v1';
	const {
		item: todos,
		saveItem: saveTodos,
		loading,
		error
	} = useLocalStorage(localTodoStorage, []);

	//States
	const [searchValue, setSearchValue] = React.useState('');

	const [filterType, setFilter] = React.useState('_all');

	const [openModal, setOpenModal] = React.useState(false);

	const [darkMode, setDarkMode] = React.useState(false);

	const completedTodos = todos.filter(todo => todo.completed).length;
	let totalTodos = todos.length;

	let searchedTodos = [];

	const searchTodoFilter = (todoList) => {
		searchedTodos = todoList.filter(todo => {
			const todoText = todo.text.toLowerCase();
			const searchText = searchValue.toLowerCase();
			return todoText.includes(searchText);
		})
	}
	if (!searchedTodos >= 1) {
		searchedTodos = todos;

	}
	else if (filterType === '_all') {
		searchTodoFilter(todos);

	}
	else if (filterType === '_completed') {
		searchedTodos = todos.filter(todo => todo.completed === true);
		totalTodos = searchedTodos.length;
		searchTodoFilter(searchedTodos);
	}
	else if (filterType === '_active') {
		searchedTodos = todos.filter(todo => todo.completed === false);
		totalTodos = searchedTodos.length;
		searchTodoFilter(searchedTodos);
	}


	const completeTodo = (id) => {

		// Set complete ToDo
		const todoIndex = todos.findIndex(todo => todo.id === id);
		const newTodos = [...todos];

		newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
		saveTodos(newTodos);
	}

	const addTodo = (text) => {
		const newTodos = [...todos];
		const todoCount = newTodos.length;

		newTodos.push({
			id: todoCount,
			text,
			completed: false
		});
		saveTodos(newTodos);

		/* console.log(newTodos); */
	}

	const deleteTodo = (id) => {

		// Delete ToDo
		const todoIndex = todos.findIndex(todo => todo.id === id);
		const newTodos = [...todos];

		newTodos.splice(todoIndex, 1);
		saveTodos(newTodos);
	};

	return (
		<TodoContext.Provider value={{
			searchValue,
			setSearchValue,
			searchedTodos,
			completeTodo,
			deleteTodo,
			totalTodos,
			completedTodos,
			addTodo,
			filterType,
			setFilter,
			error,
			loading,
			openModal,
			setOpenModal,
			darkMode,
			setDarkMode
		}}>
			{props.children}
		</ TodoContext.Provider>
	);
}

export { TodoContext, TodoProvider };

