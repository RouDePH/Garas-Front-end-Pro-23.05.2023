import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './actions';

const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.text,
            completed: false,
          },
        ],
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    default:
      return state;
  }
};
