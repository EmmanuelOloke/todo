import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, deleteTodo }) => {
  return !todos.length ? (
    <div className="nothing">No Todo List to display. Well done!!!</div>
  ) : (
    <ul className="todo-container">
      {todos.map((todo, i) => (
        <div className="list" key={i}>
          <li className="todo" key={todo.id}>
            {todo.title}
          </li>
          <button className="done" onClick={() => deleteTodo(todo.id)}>
            Done
          </button>
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
