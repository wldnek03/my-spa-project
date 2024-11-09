// src/components/RefComponent.js (useRef 사용 예시)
import React, { useRef } from 'react';

const RefComponent = () => {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type='text' placeholder='Focus me!' />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
};

export default RefComponent;