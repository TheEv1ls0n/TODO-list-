import React from 'react';

import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import './SearchPanel.css';

export default class SearchPanel extends React.Component{
    state = {
      term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    }
    render(){
        return  (
            <form className="search-panel d-flex">
                <input
                    className="form-control"
                    placeholder = "Type here to search"
                    value={this.state.term}
                    onChange={this.onSearchChange}/>
                <ItemStatusFilter filter = {this.props.filter}
                                  onFilterChange ={this.props.onFilterChange}/>
            </form>
        );
    }
};

