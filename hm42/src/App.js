import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './store/todos';
import TodoList from './components/TodoList';

import './App.css';


const App = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    } else { 
      alert("Введiть назву для тудушки");
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Додати</button>
      </div>
      <TodoList />
    </div>
  );
};

export default connect(null, { addTodo })(App);
