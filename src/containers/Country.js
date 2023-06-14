import React, { Component } from 'react';
import Fuamosplace from './Fuamosplace';

class Country extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            countryName : 'India'
        })
    }

    handleChange = () => {
        this.setState({
            countryName : 'UK'
        })
    }
    
    render() {
        return (
            <div>
                <h1>Country</h1>
              <Fuamosplace  cname = {this.state.countryName}  />
              
              <button onClick={this.handleChange}>Change</button>
            </div>
        );
    }
}

export default Country;