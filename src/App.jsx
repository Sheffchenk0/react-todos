import React from 'react';
import Todo from './components/Todo';

export default function App() {
  return (
    <div className="container">
      <div className="first-block">
        <h1>Todo list:</h1>
        <div className="input-block">
          <input placeholder="New todo..." className="text" type="text" />
          <button className="button button--add-todo">New todo</button>
        </div>
      </div>
      <div className="todos">
        <Todo />
        <Todo />
        <Todo />
      </div>
    </div>
  );
}
