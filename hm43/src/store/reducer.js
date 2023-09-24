import { LOAD_TODOS, ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './actions';

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TODOS:
      return {
        todos: action.todos,
      };
    case ADD_TODO:
      return {
        todos: [...state.todos, action.todo],
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.todo.id ? action.todo : todo
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
