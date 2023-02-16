import React from 'react'

function LoadingSkeleton() {
  return (
	<section className='SkeletonContainer'>
		<ul className='SkeletonContainer_ul'>
			<li className='SkeletonContainer_ul_li'></li>
			<li className='SkeletonContainer_ul_li'></li>
			<li className='SkeletonContainer_ul_li'></li>
		</ul>
	</section>
  )
}

export {LoadingSkeleton}
