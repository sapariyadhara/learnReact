import React, { useState } from 'react';

function CounterFun(props) {
    let [counter , setCounter] = useState(0)

    const handlePlus = () => {
        setCounter(counter+1)
    }

    const handleMinus = () => {
        setCounter(counter-1)
    }

    return (
        <div>
            <p>Counter : {counter}</p>
            <button onClick={handlePlus}> + </button>
            <button onClick={handleMinus}> - </button>
        </div>
    );
}

export default CounterFun;