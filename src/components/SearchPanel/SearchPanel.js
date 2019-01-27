import React from 'react';

import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import './SearchPanel.css';

const SearchPanel = () => {
    const searchText = 'Type here to search';

    return  (
        <form className="search-panel d-flex">
            <input
                className="form-control"
                placeholder = {searchText}
            />
            <ItemStatusFilter />
        </form>
    );
};

    export default SearchPanel;