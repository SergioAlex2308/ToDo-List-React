import React from 'react'

function CreateTodoButton(props) {

	const onClickButton = () => {
		props.setOpenModal(true);
	}

  return (
	<button className='CreateButton' onClick={onClickButton}>
		+
	</button>
  )
}
export { CreateTodoButton };