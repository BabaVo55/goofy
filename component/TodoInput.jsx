import React, {useState} from 'react'

export default function TodoInput(props) {

    
    const {handleAddTodo, inputValue, setInputValue} = props

  return (
    <main>
        <input placeholder='Enter your Todo' value={inputValue} onChange={(e) => {
            setInputValue(e.target.value)
        }} />
        <button onClick={() => {
            handleAddTodo(inputValue)
            setInputValue('')
        }} >Add</button>
        <button>Find</button>
    </main>
  )
}


