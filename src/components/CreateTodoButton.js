import React from 'react'

function CreateTodoButton(props) {

	const onClickButton = () => {
		props.setOpenModal(true);
	}

	return (
		<button className='CreateButton' onClick={onClickButton}>
			<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<line x1="12" y1="5" x2="12" y2="19" />
				<line x1="5" y1="12" x2="19" y2="12" />
			</svg>
		</button>
	)
}
export { CreateTodoButton };