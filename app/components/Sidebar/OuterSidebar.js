"use client";

import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import LogoutButton from './LogoutButton';
import sidebarItems from './sidebarItems';

const OuterSidebar = () => {
    const [activeItem, setActiveItem] = useState('Profile');
    const handleItemClick = (label) => {
        if (label !== 'Log Out' && label !== 'Start New Chat') {
            setActiveItem(label);
        }
    };

    return (
        <aside className={styles.outerSidebar}>
            <h1>Welcome to the Legislate!</h1>
            <ul >
                {sidebarItems.map((item, index) => (
                    <li key={index}>
                        <button
                            className={`${styles.sidebarButton} ${activeItem === item.label && item.label !== 'Log Out' && item.label !== 'Start New Chat' ? styles.activeButton : ''} ${item.label === 'Start New Chat' ? styles.chatButton : ''}`}
                            onClick={() => handleItemClick(item.label)}
                        >
                            <span className={activeItem === item.label && item.label !== 'Log Out' && item.label !== 'Start New Chat' ? styles.activeIcon : ''}>
                                {item.icon}
                            </span>
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
            <LogoutButton />
        </aside>
    );
};

export default OuterSidebar;
