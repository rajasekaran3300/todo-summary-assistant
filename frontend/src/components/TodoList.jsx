import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onEdit }) => {
    if (todos.length === 0) {
        return <p className="text-center">No todos yet!</p>;
    }

    return (
        <ul className="list-group">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </ul>
    );
};

export default TodoList;
