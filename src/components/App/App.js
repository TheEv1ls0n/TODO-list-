import React from 'react';

import SearchPanel from '../SearchPanel/SearchPanel';
import AppHeader from '../AppHeader/AppHeader';
import TodoList from '../TodoList/TodoList';
import NewTasks from '../NewTasks/NewTasks';

class App extends React.Component{

    state = { todoData : [

        ]
    };



    addItem = (text) => {
        this.setState(({todoData}) =>{
            const lastItem = todoData[todoData.length - 1];
            const newId = lastItem.id + 1;

            return {
                todoData: todoData.concat({
                    label: text,
                    important: false,
                    done: false,
                    id: newId
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

    onToggleImportant = (id) => {
        console.log('Toggle Important', id);
    };

    onToggleDone = (id) => {
        console.log('Toggle Done ', id);
    };


    render() {

        return (
            <div>
                <AppHeader />
                <SearchPanel />
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={ this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}/>
                <NewTasks onAdded={this.addItem}/>
            </div>
        );
    }
};

export default App;