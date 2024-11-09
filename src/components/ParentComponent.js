// src/components/ParentComponent.js (Top-Down 방식)
import React, { useState } from 'react';
import TopDownComponent from './TopDownComponent';
import BottomUpComponent from './BottomUpComponent';

const ParentComponent = () => {
    const [message, setMessage] = useState('No Calls Yet');
    const [data, setData] = useState('Hello from Parent');

    const handleChange = (newMessage) => {
        setMessage(newMessage);
    };
    return (
        <div>
            <p>{message}</p>
            <BottomUpComponent onChange={handleChange} />
            <TopDownComponent data={data} />
            <button onClick={() => setData('Updated Data')}>Update Data</button>
    
        </div>
    );
};

export default ParentComponent;