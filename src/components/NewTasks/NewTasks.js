import React from 'react';

import './NewTasks.css';

export default class NewTasks extends React.Component{

    render() {
        const {onAdded} = this.props;

        return(
            <div className="new-tasks">
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => onAdded('Hello World')}>
                    Add New
                </button>
            </div>
        );
    };
}