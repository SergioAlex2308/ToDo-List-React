import React from 'react'

function AlertAdd() {
  return (
    <section className='LeftPanel_todos_placeholder'>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-plus" width="64" height="64" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#E0E0E0" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <line x1="9" y1="12" x2="15" y2="12" />
        <line x1="12" y1="9" x2="12" y2="15" />
      </svg>
      <p>Add a new ToDo</p>
    </section>
  )
}
export { AlertAdd }