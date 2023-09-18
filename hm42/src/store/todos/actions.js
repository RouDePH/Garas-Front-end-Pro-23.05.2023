export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = (text) => ({
  type: ADD_TODO,
  text,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});
