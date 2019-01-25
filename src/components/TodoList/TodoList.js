import React from 'react';

import TodoListItem from '../TodoList-Item/TodoList-Item';
import './TodoList.css';

const TodoList = ({ todos, onDeleted, onAdded,onToggleImportant, onToggleDone}) => {

    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...itemProps}
                onDeleted={() => onDeleted(id)}
                onAdded={() => onAdded()}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleDone={() => onToggleDone(id)}/>
            </li>
        );
    });
    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;