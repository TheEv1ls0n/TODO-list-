import React from 'react';

import SearchPanel from '../SearchPanel/SearchPanel';
import AppHeader from '../AppHeader/AppHeader';
import TodoList from '../TodoList/TodoList';
import NewTasks from '../NewTasks/NewTasks';

class App extends React.Component{

    state = { todoData : []
    };

    addItem = (text) => {
        this.setState(({todoData}) =>{
            const lastItem = todoData[todoData.length - 1];
            const newId = lastItem  ? lastItem.id : 0;

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
              todoData : newArray
          };
      });
    };

    toggleProperty(arr, id, propName){
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
                todoData : this.toggleProperty(todoData, id, 'done')
            };
        });
    };


    render() {
        const {todoData} = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div>
                <AppHeader toDo = {todoCount} done = {doneCount}/>
                <SearchPanel />
                <TodoList
                    todos={todoData}
                    onDeleted={ this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}/>
                <NewTasks onAdded={this.addItem}/>
            </div>
        );
    }
}

export default App;