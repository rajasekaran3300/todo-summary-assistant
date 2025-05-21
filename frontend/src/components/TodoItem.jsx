import React from 'react';

const TodoItem = ({ todo, onDelete, onEdit }) => (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {todo.text}
      <div>
        <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(todo)}>Edit</button>
        <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </li>
  );
  

export default TodoItem;
