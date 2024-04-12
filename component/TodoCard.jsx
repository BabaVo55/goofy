import React from 'react'

export default function (props) {
    const {children, index, handleDeleteTodo, handleEditTodo} = props
  return (
        <li  className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <button onClick={() => {
                    handleDeleteTodo(index)
                    }}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
                <button onClick={() => {
                    handleEditTodo(index)
                }}>
                    <i className="fa-regular fa-pen-to-square"></i>
                </button>
            </div>
        </li>
  )
}
