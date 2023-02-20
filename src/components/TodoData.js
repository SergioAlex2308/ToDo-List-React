import React from 'react'
import { TodoContext } from '../context';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { LoadingSkeleton } from './LoadingSkeleton';
import { AlertAdd } from './AlertAdd';
import { AlertResults } from './AlertResults';
import { Modal } from './Modal';
import { CreateTodoButton } from './CreateTodoButton';
import { ToggleMode } from './ToggleMode';

const BehanceLink = 'https://www.behance.net/sergiomartinez49';
const GitLink = 'https://github.com/SergioAlex2308';

function TodoData() {

	const {
		error,
		loading,
		totalTodos,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal,
		setOpenModal,
		darkMode,
		setDarkMode
	} = React.useContext(TodoContext)

	return (
		<section className='RightPanel'>
			{openModal && (
				<Modal openModal={openModal} setOpenModal={setOpenModal} />
			)}
			<div className='RightPanel_filter'>
				<div className='RightPanel_toggle'>
					<ToggleMode darkMode={darkMode} setDarkMode={setDarkMode} />
				</div>
				<h2 className='RightPanel_filter_text'>Your items</h2>
				<TodoSearch />
			</div>
			<div className='RightPanel_todos'>
				<TodoList>
					{error &&
						<p>an error has occurred</p>
					}
					{loading &&
						<LoadingSkeleton />
					}
					{(totalTodos < 1) &&
						<AlertAdd />
					}
					{((totalTodos > 0) && !searchedTodos.length) &&
						<AlertResults />
					}
					{searchedTodos.map(todo => (
						<TodoItem
							key={todo.id}
							id={todo.id}
							text={todo.text}
							completed={todo.completed}
							onComplete={() => completeTodo(todo.id)}
							onDelete={() => deleteTodo(todo.id)}
						/>
					))}
				</TodoList>
				<TodoCounter />
			</div>
			<div className='RightPanel_footer'>
				<a href={BehanceLink} target="_blank" rel="noopener noreferrer">
					<svg className='RightPanel_footer_icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 8.101h-4v-.875h4v.875zm.84 6.125c-.77 2.258-5.949 2.966-5.949-1.56 0-4.583 5.508-4.377 6.053-.872.045.295.062.693.055 1.249h-4.41c-.104 1.715 1.76 1.932 2.404 1.184h1.847zm-4.211-2.333h2.624c-.115-1.687-2.36-1.81-2.624 0zm-5.858 4.076h-3.771v-8.73h4.056c3.194.047 3.255 3.176 1.587 4.028 2.019.735 2.086 4.702-1.872 4.702zm-1.896-5.134h1.965c1.464 0 1.696-1.859-.182-1.859h-1.783v1.859zm1.854 1.454h-1.854v1.947h1.824c1.782-.001 1.673-1.947.03-1.947zm3.271-10.289c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" />
					</svg>
				</a>
				<a href={GitLink} target="_blank" rel="noopener noreferrer">
					<svg className='RightPanel_footer_icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
					</svg>
				</a>
			</div>
			<CreateTodoButton
				setOpenModal={setOpenModal}
			/>
		</section>
	)
}

export { TodoData }