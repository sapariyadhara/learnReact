import React, { useEffect, useState } from 'react';

function ClockFun(props) {
    //1
    const [ time , setTime] = useState(new Date())

    const tick = () => {
     setTime(new Date())
    }

    //Hooks : useEffect
    useEffect(() => {
    
        //3. componentDidMount
        //5. componentDidUpdate
        let timedata =    setInterval(tick ,1000)

        //6. componentWillUnmount
        return  () => {
            clearInterval(timedata)
        }
       
    } , [time])

    //2. //4.
    return (
        <div>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default ClockFun;