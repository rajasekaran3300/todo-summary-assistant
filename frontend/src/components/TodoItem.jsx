const TodoItem = ({ todo, onDelete, onEdit }) => {
    return (
      <div className="">
        <div className="rounded p-2 border "style={{ maxHeight: "850px", overflowY: "auto" }}>
        <li className="list-group-item d-flex justify-content-between align-items-center border border-dark rounded">
          {todo.text}
          <div>
            <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(todo)}>
              Edit
            </button>
            <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo.id)}>
              Delete
            </button>
          </div>
        </li>
      </div>
      </div>
      
    );
  };
  
  export default TodoItem;
  