import React from 'react';

import SearchPanel from '../SearchPanel/SearchPanel';
import AppHeader from '../AppHeader/AppHeader';
import TodoList from '../TodoList/TodoList';
import NewTasks from '../NewTasks/NewTasks';

class App extends React.Component{

    state = { todoData : [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Make Awesome App', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3},
        ]
    };

    addItem = (text) => {
        //generate id
        //const lastItem = this.state.todoData.pop();
       // const newId = Object.assign({}, lastItem).id;
//console.log(newId);
        let newId = 50;
        const newItem = {
            label: text,
            important: false,
            id: (this,newId + 1)
        };

        this.setState(({todoData}) =>{
            return {
                todoData: todoData.concat(newItem)
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

    render() {

        return (
            <div>
                <AppHeader />
                <SearchPanel />
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={ this.deleteItem}/>
                <NewTasks onAdded={this.addItem}/>
            </div>
        );
    }
};

export default App;