import React from 'react';

/* import './TodoList.scss'; */

function TodoList( props ) {
  return (
	<section className='Result'>
		<ul className='Result_list'>
			{ props.children }
		</ul>
	</section>
  )
}		
export { TodoList };
