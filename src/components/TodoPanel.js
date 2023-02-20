import React from 'react';
import { FormTodo } from './FormTodo';
import { ToggleMode } from './ToggleMode';

import WavesLight from '../assets/WavesLight.png';
import { TodoContext } from '../context';

function TodoPanel() {

	const { darkMode, setDarkMode} = React.useContext(TodoContext);

	return (
		<section className="LeftPanel">
			<div id='mountToggle' className='LeftPanel_header'>
				<ToggleMode darkMode={darkMode} setDarkMode={setDarkMode}/>
			</div>
			<div className='LeftPanel_menu'>
				<div className='LeftPanel_menu_text'>
					<h1>Quick manage your to-do list.</h1>
					<h3>Add items and mark them as done.</h3>
				</div>
				<FormTodo className='LeftPanel_bar'/>
			</div>
			<div className='LeftPanel_waves'>
				<img src={WavesLight} alt='waves blue tones' />
			</div>
		</section>
	)
}
export { TodoPanel };	