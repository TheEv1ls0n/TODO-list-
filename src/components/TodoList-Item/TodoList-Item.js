import React, {Component} from 'react';

import './TodoList-Item.css';

class TodoListItem extends Component {

    render(){
        const { label, onDeleted, onToggleImportant, onToggleDone, done, important} = this.props;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }
        return (
            <span className= { classNames }>
                <span
                    className="todo-list-item-label"
                    onClick={onToggleDone}>
                {label}
                </span>
                <div>
                <button type="button"
                   className='btn btn-outline-success'
                    onClick={onToggleImportant}>
                    <i className="fa fa-exclamation"/>
                </button>

                <button type="button"
                   className="btn btn-outline-danger btn-sm"
                    onClick={onDeleted}>
                <i className="fa fa-trash-o"/>
                </button>
                </div>
            </span>
        );
    };
}


export default TodoListItem;