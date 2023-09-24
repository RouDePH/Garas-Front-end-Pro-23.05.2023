import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTodos, toggleTodo, deleteTodo } from '../store';
import { List, Button } from 'antd';

const TodoList = () => {

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  const handleToggleTodo = (id, completed) => {
    dispatch(toggleTodo(id, completed));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <List
      dataSource={todos}
      renderItem={(todo) => (
        <List.Item
          actions={[
            <Button
              type="primary"
              onClick={() => handleToggleTodo(todo.id, todo.completed)}
            >
              {todo.completed ? 'Відмітити як незавершене' : 'Відмітити як завершене'}
            </Button>,
            <Button type="danger" onClick={() => handleDeleteTodo(todo.id)}>
              Видалити
            </Button>,
          ]}
        >
          <List.Item.Meta
            title={
              <span
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                }}
              >
                {todo.text}
              </span>
            }
          />
        </List.Item>
      )}
    />
  );
};

export default TodoList;
