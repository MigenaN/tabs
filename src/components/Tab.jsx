import React, { useState } from 'react';
import './Tab.css'; // Import the CSS file

const Tab = ({ items }) => {
const [activeTab, setActiveTab] = useState(0);

const handleTabClick = (index, callback) => {
    setActiveTab(index);
    if (callback) {
    callback();
    }
};

return (
    <div className="tab-container">
        <div className="tab-headers">
        {items.map((item, index) => (
        <div
            key={index}
            className={`tab-header ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index, item.callback)}
        >
            {item.label}
        </div>
        ))}
    </div>
    <div className="tab-content">
        {items[activeTab] && items[activeTab].content}
    </div>
    </div>
);
};

export default Tab;
