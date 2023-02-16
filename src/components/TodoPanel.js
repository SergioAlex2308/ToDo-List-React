import React from 'react';
import { FormTodo } from './FormTodo';
import { ToggleMode } from './ToggleMode';

import WavesLight from '../assets/WavesLight.png';
import WavesDark from '../assets/WavesDark.png';

function TodoPanel() {

	return (
		<section className="RightPanel">
			<div className='RightPanel_header'>
				<ToggleMode />
			</div>
			<div className='RightPanel_menu'>
				<div className='RightPanel_menu_text'>
					<h1>Quick manage your to-do list.</h1>
					<h3>Add items and mark them as done.</h3>
				</div>
				<FormTodo className='RightPanel_bar'/>
			</div>
			<div className='RightPanel_waves'>
				<img src={WavesLight} alt='waves blue tones' />
			</div>
		</section>
	)
}
export { TodoPanel };	