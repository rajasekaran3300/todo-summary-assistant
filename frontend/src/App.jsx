import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState('');
  const [editTodoId, setEditTodoId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/todos')
      .then(res => setTodos(res.data))
      .catch(err => console.error(err));
  }, []);

  const addTodo = async (text) => {
    try {
      const res = await axios.post('http://localhost:5000/todos', { text });
      setTodos([...todos, res.data]);
      toast.success('Successfully Added!')
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/todos/${id}`);
      console.log(">>");
      toast.success('Successfully Deleted!')
      
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (todo) => {
    setEditMode(true);
    setEditText(todo.text);
    setEditTodoId(todo.id);
    
  };

  const saveEdit = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/todos/${editTodoId}`, { text: editText });
      const updatedTodos = todos.map(todo =>
        todo.id === editTodoId ? res.data : todo
      );
      setTodos(updatedTodos);
      setEditMode(false);
      setEditText('');
      setEditTodoId(null);
      toast.success('Successfully Edited!')
    } catch (err) {
      console.error(err);
    }
  };

  const generateSummary = async () => {
    try {
      const res = await axios.post('http://localhost:5000/todos/summarize');
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert('Failed to send summary to Slack');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-center p-4">Todo Summary Assistant</h1>
      <TodoForm
        onAdd={addTodo}
        editMode={editMode}
        editText={editText}
        setEditText={setEditText}
        onEditSave={saveEdit}
      />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onEdit={handleEdit}
      />

      <button className="btn btn-info mt-3" onClick={generateSummary}>
        Summarize & Send to Slack
      </button>
      <ToastContainer />
    </div>
  );
};

export default App;
