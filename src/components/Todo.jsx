import classNames from 'classnames';
import React from 'react';
const Todo = ({ text, isChecked, id, onCheck, onDelete }) => {
  return (
    <div className="todo">
      <input
        onChange={() => {
          onCheck(id);
        }}
        checked={isChecked}
        className="checkbox"
        type="checkbox"
        id={'checkbox_' + id}
      />
      <label className={classNames({ made: isChecked })} htmlFor={'checkbox_' + id}>
        {text}
      </label>
      <button
        onClick={() => {
          return onDelete(id);
        }}
        className="delete"></button>
    </div>
  );
};

export default React.memo(Todo);
