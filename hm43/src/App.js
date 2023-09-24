import React from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { Typography } from 'antd';

const { Title } = Typography;

const App = () => {
  return (
    <div>
      <Title>Todo App</Title>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
