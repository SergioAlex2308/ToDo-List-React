import ReactDOM from 'react-dom';

import { FormTodo } from './FormTodo';

function Modal(props) {

	const onClickModal = () => {
		props.setOpenModal(false);
	}

	const modal = document.getElementById('modal');

	return ReactDOM.createPortal(
		<div className='Modal_background'>
			<div className='Modal_content'>
				<div className='Modal_content_header'>
					<span className='Item_close' onClick={onClickModal}>&#x2715;</span>
				</div>
				<div className='Modal_content_body'>
					<FormTodo openModal={props.openModal} setOpenModal={props.setOpenModal} />
				</div>
			</div>
		</div>,
		modal
	)
}
export { Modal }