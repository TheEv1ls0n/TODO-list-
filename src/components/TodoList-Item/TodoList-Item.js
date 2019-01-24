import React, {Component} from 'react';

import './TodoList-Item.css';

class TodoListItem extends Component {

    constructor(){
        super();
        this.onMarkImportant = () => {
          this.setState((state) =>{
              return {
                  important: !state.important
              }
          });
        };
        this.onLabelClick = () => {
            this.setState((state) =>{
                return {
                    done : !state.done
                };
            });
        };
        this.state = {
            done: false,
            important: false
        };
    }


    render(){
        const { label, onDeleted} = this.props;
        const { done, important } = this.state;


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
                    onClick={this.onLabelClick}>
                {label}
                </span>

                <button type="button"
                   className='btn btn-outline-success'
                    onClick={this.onMarkImportant}>
                    <i className="fa fa-exclamation"/>
                </button>

                <button type="button"
                   className="btn btn-outline-danger btn-sm"
                    onClick={onDeleted}>
                <i className="fa fa-trash-o"/>
                </button>
            </span>
        );
    };
}


export default TodoListItem;