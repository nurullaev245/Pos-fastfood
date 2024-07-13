// CustomButton.jsx

import React from 'react';

const CustomButton = ({ onClick, text, color, size }) => {
    return (
        <button
            className={`btn btn-${color} btn-${size}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default CustomButton;
