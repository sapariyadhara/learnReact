import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
       this.state = ({
        counter : 0
       })
    }

   handlePlus = () => {
    if(this.state.counter < 5 ){
        this.setState({
            counter : this.state.counter + 1 
       })
    }
       
   }
    
   handleMinus = () => {
    if(this.state.counter > 0){
        this.setState({
            counter : this.state.counter - 1
        })
    }
   }
    render() {
        return (
            <div>
                <p> Counter : {this.state.counter}</p>
                <button disabled={this.state.counter < 5 ? false : true} onClick={this.handlePlus}> + </button>
                <button disabled={this.state.counter === 0 ? true : false} onClick={this.handleMinus}> - </button>
            </div>
        );
    }
}

export default Counter;