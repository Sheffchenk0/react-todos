import React, { useState, useEffect } from 'react';
import Todo from './components/Todo';

export default function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  const onCheck = (id) => {
    setTodos((todos) => {
      let arr = [...todos];
      arr[id] = { ...arr[id], isChecked: !arr[id].isChecked };
      return arr;
    });
  };

  useEffect(() => {
    console.log(2);
    let todos = localStorage.getItem('todos');
    if (todos) {
      setTodos(JSON.parse(todos));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const onDelete = (id) => {
    setTodos((todos) => {
      let arr = [...todos];
      arr.splice(id, 1);
      return arr;
    });
  };
  return (
    <div className="container">
      <div className="first-block">
        <h1>Todo list:</h1>
        <div className="input-block">
          <input
            onChange={(event) => setText(event.target.value)}
            value={text}
            placeholder="New todo..."
            className="text"
            type="text"
          />
          <button
            onClick={() => {
              setTodos((todos) => {
                setText('');
                return [...todos, { text: text, isChecked: false }];
              });
            }}
            className="button button--add-todo">
            New todo
          </button>
        </div>
      </div>
      <div className="todos">
        {todos
          .map((el, index) => {
            return <Todo key={index} {...el} id={index} onCheck={onCheck} onDelete={onDelete} />;
          })
          .reverse()}
      </div>
    </div>
  );
}
