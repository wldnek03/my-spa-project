// src/components/CounterComponent.js (Custom Hook 사용)
import React from 'react';
import useCounter from '../hooks/useCounter';

const CounterComponent = () => {
    const { count, increment, decrement } = useCounter();

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default CounterComponent;