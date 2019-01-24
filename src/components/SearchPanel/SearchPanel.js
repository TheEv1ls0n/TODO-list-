import React from 'react';

import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';

const SearchPanel = () => {
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '25px'
    };

    return  (
        <div>
                <input
                placeholder = {searchText}
                style={searchStyle}
                />
                <ItemStatusFilter />
        </div>
    );
};

    export default SearchPanel;