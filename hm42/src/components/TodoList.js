import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from '../store/todos';

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo.id)}>Видалити</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { deleteTodo, toggleTodo })(TodoList);
