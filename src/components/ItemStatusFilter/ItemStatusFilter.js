import React from 'react';

const ItemStatusFilter = ({doneItem}) => {
    return (
        <div className="btn-group">
            <button type="button"
                    className="btn btn-info">All
            </button>
            <button type="button"
                    className="btn btn-outline-secondary"
            >Active
            </button>
            <button type="button"
                    className="btn btn-outline-secondary"
                    onClick={doneItem}>Done
            </button>
        </div>
    );
};


export default ItemStatusFilter;