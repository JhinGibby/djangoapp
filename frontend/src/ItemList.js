//# Project Name: React-DJ
//# Creator Name: Stoyan Dimitrov
//# Creation Date: 03-03-2024
//# Timestamp: 14:40:14
//# Notes: 

import React, { useEffect, useState } from 'react';

function ItemList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/items/')  // Make sure this URL is correct!
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2>Items</h2>
            <ul>
                {items.map(item => (
                    <li key={item.name}>{item.name}: {item.description}</li>
                ))}
            </ul>
        </div>
    );
}

export default ItemList;

