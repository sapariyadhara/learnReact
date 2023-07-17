import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/action/counter.action';

function Counter(props) {
    const dipatch = useDispatch()
    const counterVal = useSelector(state => state.Counter)

    const handleEnc = () => {
        dipatch(increment())
    }

    const handleDec = () => {
        dipatch(decrement())
    }
    return (
        <div>
            <button onClick={() => handleEnc()}> + </button>
                <span>{counterVal.count}</span>
            <button onClick={() => handleDec()}> - </button>
        </div>
    );
}

export default Counter;