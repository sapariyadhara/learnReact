import React, { useState } from 'react';

function CounterFun(props) {
    let [counter , setCounter] = useState(0)

    const handlePlus = () => {
        if(counter < 5){
            setCounter(counter+1)
        }
        
    }

    const handleMinus = () => {
        if(counter > 0){
            setCounter(counter-1)
        }
        // setCounter(counter-1)
    }

    return (
        <div>
            <p>Counter1 : {counter}</p>
            <button disabled={counter < 5 ? false : true} onClick={handlePlus}> + </button>
            <button disabled={counter === 0 ? true : false } onClick={handleMinus}> - </button>
        </div>
    );
}

export default CounterFun;