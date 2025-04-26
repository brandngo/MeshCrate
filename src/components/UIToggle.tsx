import React, { useState } from 'react';
import { IoMoon, IoMoonOutline } from "react-icons/io5";

interface UIToggleProps {
    value?: ;
    onClick: () => void;
}

const UIToggle: React.FC<UIToggleProps> = ({ value=false, onClick, disabled = false }) => {
    return (
        <button onClick={onClick} disabled={disabled} className="ui-toggle-button">
            
        </button>
    );
};

export default UIToggle;