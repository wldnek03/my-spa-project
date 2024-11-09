// src/components/BottomUpComponent.js (Bottom-Up 방식)
import React from 'react';

const BottomUpComponent = ({ onChange }) => {
    return <button onClick={() => onChange('Called from Child')}>Call Parent</button>;
};

export default BottomUpComponent;