import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        }, () => console.log(this.state));
        
    }

    handleSubmit(e) {
        alert('File has been submitted');
        e.preventDefault();
    }

    //axios calls


    render() {
        return (
            <div>
                  <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter Info
                    </label>
                    <div>
                        <textarea type='text' id='text' value={this.state.value} onChange={this.handleChange} />
                    </div>
                </form>
                <input type="submit" value="Submit" />
            </div>
            </div>
          
        )
    }
}


export default App;