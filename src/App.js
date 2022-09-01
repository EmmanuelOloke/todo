import React, { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';
import './App.css';

// const testTodos = [
//   { id: 1, title: 'Take out the trash' },
//   { id: 2, title: 'Drive the car out for a wash' },
//   { id: 3, title: 'Book holiday flight' },
// ];

function App() {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1 className="">Todo App</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
