import React from 'react';
import './ColorSelector.css';

const colors = [
  { name: 'Blue', value: '#1e90ff' },
  { name: 'Green', value: '#28a745' },
  { name: 'Red', value: '#dc3545' },
  { name: 'Purple', value: '#6f42c1' },
];

const ColorSelector = ({ setColor }) => {
  return (
    <div className="color-selector">
      <h3>Select Color</h3>
      {colors.map((color) => (
        <button
          key={color.name}
          style={{ backgroundColor: color.value }}
          onClick={() => setColor(color.value)}
        >
          {color.name}
        </button>
      ))}
    </div>
  );
};

export default ColorSelector;
