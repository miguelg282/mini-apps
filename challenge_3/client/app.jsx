import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form1: true,
            form2: false,
            form3: false
        }
        this.handleCheckout = this.handleCheckout.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

 handleCheckout() {
    this.setState({
      form1: false,
      form2: true
    })
 }
 handleNext() {
     this.setState({
         form1: false,
         form2: false,
         form3: true
     })
 }
 
    render() {

    if(this.state.form1) {
        return (
                <form id='form1'>
                <div>
                <label>  Name    </label>
                <input placeholder='Enter Full Name'/>
                </div>
                <div>
                <label>  Email    </label>
                <input placeholder='Enter Email'/>
                </div>
                <div>
                <label>Password</label>
                <input placeholder='Enter Password'/>
                </div>
                <div></div>
                <button onClick={this.handleCheckout}>Checkout</button>
            </form>
        )
        }
    if(this.state.form2) {
        return (
        <div>
            <form id='form2'>
                <div>
                <label>  Address   </label>
                <input placeholder='Line 1'/>
                </div>
                <div>
                <label>  Address   </label>
                <input placeholder='Line 2'/>
                </div>
                <div>
                <label>City</label>
                <input placeholder='Enter City '/><label>State</label><input placeholder='Enter State' />
                </div>
                <div>
                <label>  Zip Code   </label>
                <input placeholder='Enter Zip Code'/>
                </div>
                <div></div>
                <button onClick={this.handleNext}>Next</button>
            </form>
        </div>
        )
            }
        if(this.state.form3) {
            // credit card #, expiry date, CVV, and billing zip code.
            return (
                <div>
                    <form>
                        <div>
                        <label>  Credit Card   </label>
                        <input placeholder='Enter Numbers'/>
                        </div>
                        <div>
                        <label>  Expiration  </label>
                        <input placeholder='Enter Expiration'/><label>CVV</label><input placeholder='Enter CVV'/>
                        </div>
                        <div>
                        <label>Billing Zip Code</label>
                        <input placeholder='Enter Zip Code'/>
                        </div>
                        <div></div>
                        <button onClick={this.handleCheckout}>Next</button>
                    </form>
                </div>
            )
        }
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
