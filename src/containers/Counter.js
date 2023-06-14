import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
       this.state = ({
        counter : 0
       })
    }

   handlePlus = () => {
        this.setState({
             counter : this.state.counter + 1 
            })
   }
    
   handleMinus = () => {
        this.setState({
            counter : this.state.counter - 1
        })
   }
    render() {
        return (
            <div>
                <p> Counter : {this.state.counter}</p>
                <button onClick={this.handlePlus}> + </button>
                <button onClick={this.handleMinus}> - </button>
            </div>
        );
    }
}

export default Counter;