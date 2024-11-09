// src/components/ListComponent.js (Iterative & Conditional Rendering)
import React from 'react';

const ListComponent = ({ items }) => {
    return (
        <div>
            <h2>List of Items</h2>
            {items.length > 0 ? (
                <ul>
                    {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
            ) : (
                <p>No items to display!</p>
            )}
        </div>
    );
};

export default ListComponent;