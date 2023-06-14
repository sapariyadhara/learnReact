import React, { useState } from 'react';
import Famosplace1 from './Famosplace1';

function Country1(props) {
    let [contry , setCounry] = useState('India')

    const handleChange = () => {
        setCounry('UK')
    }

    return (
        <div>
            <h1>Country Name </h1>
            <Famosplace1  crName = {contry}/>
            <button onClick={handleChange}>Change</button>
        </div>
    );
}

export default Country1;