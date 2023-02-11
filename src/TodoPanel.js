import React from 'react';
import { TodoSearch } from './TodoSearch';
import { ToggleLan } from './ToggleLan';

import './scss/TodoPanel.scss';

import WavesLight from './assets/WavesLight.png';
/* import WavesDark from './assets/WavesDark.png'; */

function TodoPanel() {
	return (
		<section className="RightPanel">
			<ToggleLan />
			<div className='RightPanel_menu'>
				<div className='RightPanel_menu_text'>
					<h1>Quick manage your to-do list.</h1>
					<h3>Add items and mark them as done.</h3>
				</div>
				<TodoSearch className='RightPanel_bar' />
			</div>
			<div className='RightPanel_waves'>
				<img src={WavesLight} alt='waves blue tones' />
			</div>
		</section>
	)
}
export { TodoPanel };	