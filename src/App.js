import React from 'react';
import './App.css';
import TodoList from './Todo/TodoList';
import Context from './context';
import AddTodo from './Todo/AddTodo';

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Wake up'},
    {id: 2, completed: false, title: 'Smile'},
    {id: 3, completed: false, title: 'Make this world a little better'},
  ])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false,
    }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='wrapper'>
        <h1>My Todo List</h1>
        <AddTodo onCreate={addTodo}/>

        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}></TodoList> : <p>What are you planning to do?</p>}
        
      </div>
    </Context.Provider>
  )
}    
    

export default App;
