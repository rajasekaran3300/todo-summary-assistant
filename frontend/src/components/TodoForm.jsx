import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const TodoForm = ({ onAdd, editMode, editText, setEditText, onEditSave }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (editMode) {
      setText(editText);
    } else {
      setText('');
    }
  }, [editMode, editText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (editMode) {
      onEditSave();
    } else {
      onAdd(text);
    }
    setText('');
    setEditText('');
  };

  const handleChange = (e) => {
    setText(e.target.value);
    if (editMode) {
      setEditText(e.target.value);
    }
  };

  return (
    <div className='rounded p-2'>
    <form onSubmit={handleSubmit} className="mb-4 mt-5 w-50 display-flex flex-center border border-dark rounded">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a todo item"
          value={text}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">
          {editMode ? 'Save Changes' : 'Add'}
        </button>
      </div>
    </form>
    </div>
  );
};

export default TodoForm;
