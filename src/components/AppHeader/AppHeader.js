import React from 'react';
import SearchPanel from '../SearchPanel/SearchPanel';
const AppHeader = ({toDoCount, doneCount, doneItem}) => {
    return (
        <div>
            <div className="app-header d-flex justify-content-between align-items-center">
                <h1>My Todo List</h1>
                <h2> {toDoCount} more to do, {doneCount} done</h2>
            </div>
            <SearchPanel doneItem = {doneItem}/>
        </div>
    );
};

export default AppHeader;