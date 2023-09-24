import axios from 'axios';

export const LOAD_TODOS = 'LOAD_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

const API_KEY = process.env.REACT_APP_API_KEY;

export const loadTodos = () => async (dispatch) => {
    try {
        const response = await axios.get(
            `https://${API_KEY}.mockapi.io/todos`
        );
        dispatch({ type: LOAD_TODOS, todos: response.data });
    } catch (error) {
        alert("Помилка завантаження todo-завдань.");
        console.error('Помилка завантаження todo-завдань:', error);
    }
};

export const addTodo = (text) => async (dispatch) => {
    try {
        const response = await axios.post(
            `https://${API_KEY}.mockapi.io/todos`,
            { text, completed: false }
        );
        dispatch({ type: ADD_TODO, todo: response.data });
    } catch (error) {
        alert("Помилка додавання todo-завдання.");
        console.error('Помилка додавання todo-завдання:', error);
    }
};

export const deleteTodo = (id) => async (dispatch) => {
    try {
        await axios.delete(
            `https://${API_KEY}.mockapi.io/todos/${id}`
        );
        dispatch({ type: DELETE_TODO, id });
    } catch (error) {
        alert("Помилка видалення todo-завдання.");
        console.error('Помилка видалення todo-завдання:', error);
    }
};

export const toggleTodo = (id, completed) => async (dispatch) => {
    try {
        const response = await axios.put(
            `https://${API_KEY}.mockapi.io/todos/${id}`,
            { completed: !completed }
        );
        dispatch({ type: TOGGLE_TODO, todo: response.data });
    } catch (error) {
        alert("Помилка оновлення статусу todo-завдання.");
        console.error('Помилка оновлення статусу todo-завдання:', error);
    }
};
