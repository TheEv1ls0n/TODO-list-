import React from 'react';
import './saveLocalStorage.css';


class SaveLocalStorage extends React.Component{
    render() {
        const {onSaveLocalStorage} = this.props;

        return(
            <div>
                <button type="button"
                        className='btn btn-outline-info'
                        onClick={onSaveLocalStorage}>
                    <i className="fa fa-cloud-download "/>
                    <strong className="textBtn">Save Your Achieves</strong>
                </button>
            </div>
        )}
}

export default SaveLocalStorage;