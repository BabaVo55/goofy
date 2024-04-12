import { useState, useEffect } from 'react'
import TodoInput from '../component/TodoInput'
import TodoList  from '../component/TodoList'
function App() {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])


  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }
  function handleAddTodo(newTodo){
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(todoIndex){
    const newTodoList = todos.filter((todo, index) => {
      return index !== todoIndex
    })
    setTodos(newTodoList)
    persistData(newTodoList)
  }

  function handleEditTodo(todoIndex){
    const valueToBeEdited = todos[todoIndex]
    setInputValue(valueToBeEdited)
    handleDeleteTodo(todoIndex)
  }

  useEffect(() => {
    if (!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localStorage){
      return
    }


    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo} inputValue={inputValue} setInputValue={setInputValue} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
    </>
  )
}

export default App
