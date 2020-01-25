import React from 'react';
import ReactDOM from 'react-dom';
import Row from './Row.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
          
                <table width='600' height='500'>
                <tbody>
                    <Row /><Row /><Row /><Row /><Row /><Row /><Row />
                </tbody>
                </table>
           
          
        )
    }
}
export default App;
