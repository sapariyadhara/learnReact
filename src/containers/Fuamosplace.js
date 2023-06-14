import React, { Component } from 'react';

class Fuamosplace extends Component {
    render() {
        return (
            <div>
                <h3>Famos Place :</h3>
                <p> {this.props.cname === 'India' ? 'India : Taj Mahel' : 'Uk : London'} </p>
                

            </div>
        );
    }
}

export default Fuamosplace;