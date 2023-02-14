import ReactDOM from 'react-dom';

function Modal({ children }) {

	const modal = document.getElementById('modal');

	return ReactDOM.createPortal(
		children,
		modal
	);
}

export { Modal };