import React, { useState } from 'react';
import './App.css'; // Make sure to have the App.css file in the same directory

const appStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  fontFamily: 'Arial, sans-serif',
};

const containerStyle = {
  textAlign: 'center',
  backgroundColor: '#f9f9f9',
  borderRadius: '10px',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
  padding: '30px',
  width: '300px',
};

const headingStyle = {
  marginBottom: '20px',
  color: '#333',
};

const todoListStyle = {
  listStyle: 'none',
  padding: '0',
  margin: '0',
};

const todoItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '15px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginBottom: '10px',
  backgroundColor: '#fff',
};

const todoButtonStyle = {
  backgroundColor: '#e74c3c',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  padding: '5px 10px',
  cursor: 'pointer',
  fontSize: '14px',
  transition: 'background-color 0.3s ease',
};

const todoButtonHoverStyle = {
  backgroundColor: '#d32f2f',
  transition: 'background-color 0.3s ease',
};

const todoButtonActiveStyle = {
  backgroundColor: '#c0392b',
  transition: 'background-color 0.3s ease',
};

const App = () => {
  const [todos, setTodos] = useState(['Remove my Lab ', 'Add my Labb', 'Remember to take a money']);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={appStyle}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Todo App</h1>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
          style={{ width: 'calc(100% - 24px)', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px', outline: 'none' }}
        />
        <button
          onClick={handleAddTodo}
          style={{ ...todoButtonStyle, width: '100%', padding: '12px' }}
        >
          Add Todo
        </button>
        <ul style={todoListStyle}>
          {todos.map((todo, index) => (
            <li key={index} style={todoItemStyle}>
              {todo}
              <button
                onClick={() => removeTodo(index)}
                style={todoButtonStyle}
                onMouseOver={(e) => e.target.style = { ...todoButtonStyle, ...todoButtonHoverStyle }}
                onMouseOut={(e) => e.target.style = { ...todoButtonStyle }}
                onMouseDown={(e) => e.target.style = { ...todoButtonStyle, ...todoButtonActiveStyle }}
                onMouseUp={(e) => e.target.style = { ...todoButtonStyle, ...todoButtonHoverStyle }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
