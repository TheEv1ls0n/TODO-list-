import React from 'react';

import AppHeader from '../AppHeader/AppHeader';
import TodoList from '../TodoList/TodoList';
import NewTasks from '../NewTasks/NewTasks';

class App extends React.Component {

    state = {
        todoData: [],
        term: '',
        filter: 'all'
    };

    addItem = (text) => {
        this.setState(({todoData}) => {
            const lastItem = todoData[todoData.length - 1];
            const newId = lastItem ? lastItem.id : 0;

            return {
                todoData: todoData.concat({
                    label: text,
                    important: false,
                    done: false,
                    id: newId + 1
                })
            };
        });
    };
    deleteItem = (id) => {
        this.setState(({todoData}) => {

            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
            return {
                todoData: newArray
            };
        });
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)];
    };


    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    onSearchChange = (term) => {
        this.setState({term});
    };

    onFilterChange = (filter) => {
        this.setState({filter});
    };
        search(items, term){
        if (term.length === 0){
            return items;
        }

        return items.filter((item) => {
            return item.label.toLowerCase()
                .indexOf(term.toLowerCase()) > -1;
        });
    }

    filter(items, filter) {

        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case  'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    render() {
        const {todoData,term, filter} = this.state;

        const visibleItems = this.filter(this.search(todoData, term), filter);
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div>
                <AppHeader
                    toDoCount={todoCount}
                    doneCount={doneCount}
                    onSearchChange = {this.onSearchChange}
                    filter={filter}
                    onFilterChange={this.onFilterChange}/>
                <TodoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}/>
                <NewTasks onAdded={this.addItem}/>
            </div>
        );
    }
}

export default App;