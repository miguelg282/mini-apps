import React from 'react';
import ReactDOM from 'react-dom';
import Chip from './Chip.jsx';

class Row extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <td>
                <Chip />
            </td>
          
        )
    }
}

export default Row;