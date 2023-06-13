import React, { useState } from 'react';

function EmployeeFun(props) {
  
    let [name ,  setName] = useState('amit')
    let [age ,  setAge] = useState('24')

    const handleChage = () => {
        setAge(50)
    }

    return (
        <div>
            <p>Name : {name}</p>
            <p>Age : {age}</p>
            <button onClick={handleChage}>Chane Age</button>
        </div>
    );
}

export default EmployeeFun;