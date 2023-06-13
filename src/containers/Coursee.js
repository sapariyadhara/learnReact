import React, { Component } from 'react';

class Coursee extends Component {
    constructor(props) {
        super(props);
        this.state ={
            id : 101 ,
            cousre : 'React' ,
            age : 30
        }
    }

    handleChange = () => {
        this.setState({
            cousre : 'Master in React'
        })
    }
    
    render() {
        return (
            <div>
                <p>Name : {this.state.name}</p>
                <p>Age : {this.state.age}</p>
                <p>Course : {this.state.cousre}</p>
                <button onClick={this.handleChange}>Change Course</button>
            </div>
        );
    }
}

export default Coursee;