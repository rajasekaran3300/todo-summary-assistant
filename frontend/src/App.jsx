import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import axios from 'axios';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editTodoId, setEditTodoId] = useState(null);
  const [editText, setEditText] = useState('');


  const startEdit = (todo) => {
    setEditTodoId(todo.id);
    setEditText(todo.text);
  };

  useEffect(() => {
    axios.get('http://localhost:5000/todos')
      .then(res => setTodos(res.data))
      .catch(err => console.error(err));
  }, []);


  const addTodo = async (text) => {
    try {
      const res = await axios.post('http://localhost:5000/todos', { text });
      setTodos([...todos, res.data]);
    } catch (err) {
      console.error(err);
    }
  };


  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/todos/${id}`);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const saveEdit = async () => {
    const updatedTodos = todos.map(todo =>
      todo.id === editTodoId ? { ...todo, text: editText } : todo
    );
    setTodos(updatedTodos);
    setEditTodoId(null);
    setEditText("");
  };


  const handleEdit = (todo) => {
    setEditTodoId(todo.id);
    setEditText(todo.text);
  };



  const editTodo = (todo) => {
    // For now, just log to console. We'll implement editing next.
    console.log('Edit clicked for:', todo);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">📝 Todo Summary Assistant</h1>
      <TodoForm
        onAdd={addTodo}
        editMode={editTodoId !== null}
        editText={editText}
        setEditText={setEditText}
        onEditSave={saveEdit}
      />



      <TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
    </div>
  );
};

export default App;
