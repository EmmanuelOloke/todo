import React, { useState } from 'react';
import './AddTodo.css';

const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) {
      alert('Please enter a todo item');
      return;
    }

    const todo = {
      id: Date.now(),
      title: input,
    };

    addTodo(todo);
    console.log(todo.id, todo.title);

    setInput('');
  };

  return (
    <div className="add-todo">
      <input type="text" className="input" value={input} onChange={handleChange} />
      <button className="add" type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
