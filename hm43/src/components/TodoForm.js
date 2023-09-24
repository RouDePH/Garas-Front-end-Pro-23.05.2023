import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store';
import { Input } from 'antd';

const { Search } = Input;

const TodoForm = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const handleAddTodo = () => {
        if (text.trim() !== '') {
            dispatch(addTodo(text));
            setText('');
        }else{
            alert("Введіть завдання!");
        }
    };

    return (
        <div>
            <Search
                placeholder="Введіть завдання"
                allowClear
                enterButton="Додати"
                size="large"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onSearch={handleAddTodo}
            />
        </div>
    );
};

export default TodoForm;
