import { Button } from 'reactstrap';
import React, { Component } from 'react';

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : 101 ,
            name : 'amit' ,
            age : 30
        }
    }

    handleChangeage = () => {
        this.setState ({
            age : 50
        })
    }
    
    render() {
        return (
            <div>
                <p>Name : {this.state.name}</p>
                <p>Age : {this.state.age}</p>
                <button onClick={this.handleChangeage}>Change Age</button>
                 <Button color="danger">Danger!</Button>
            </div>
        );
    }
}

export default Employee;