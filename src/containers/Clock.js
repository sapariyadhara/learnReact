import React, { Component } from 'react';

class Clock extends Component {
    //1.
    constructor(props) {
        super(props);
        this.state = {
            time : new Date()
        }
    }

    tick = () => {
        this.setState({
            time : new Date()
        })

    }
    //3.
    componentDidMount = () => {
      this.timeData =  setInterval(this.tick , 1000)
        
    }
    //5.
    componentDidUpdate = (prepvProps , prepvstate) => {
        if(prepvstate !== this.state.time){
            console.log("componentDidUpdate called");
        }
    }
    //6.
    componentWillUnmount = () => {
        clearInterval(this.timeData)
    }
    //2.  //4.
    render() {
        return (
            <div>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Clock;