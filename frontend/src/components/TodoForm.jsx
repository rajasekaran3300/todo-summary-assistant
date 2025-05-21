import { useEffect, useState } from "react";

const TodoForm = ({ onAdd, editMode, editText, setEditText, onEditSave }) => {
    const [text, setText] = useState('');
  
    useEffect(() => {
      if (editMode) setText(editText);
    }, [editMode, editText]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!text.trim()) return;
      if (editMode) {   
        onEditSave();
      } else {
        onAdd(text);
      }a
      setText('');
    };
  
    return (
      <form onSubmit={handleSubmit} className="mb-4 mt-5 w-50 display-flex flex-center">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a todo item"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              if (editMode) setEditText(e.target.value);
            }}
          />
          <button type="submit" className="btn btn-primary">
            {editMode ? "Save Changes" : "Add"}
          </button>
        </div>
      </form>
    );
  };
  export default TodoForm;