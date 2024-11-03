"use client";

import React from 'react';
import styles from './OuterSidebarContainer.module.css';
import LogoutButton from './LogoutButton';
import outerSidebarItems from './OuterSidebarItems';

const OuterSidebarContainer = ({ activeItem, setActiveItem, onLogout }) => {
    const handleItemClick = (label) => {
        if (label !== 'Log Out' && label !== 'Start New Chat') {
            setActiveItem(label);
        }
    };

    return (
        <aside className={styles.outerSidebar}>
            <h1>Welcome to Legislate!</h1>
            <ul>
                {outerSidebarItems.map((item, index) => (
                    <li key={index}>
                        <button
                            className={`${styles.sidebarButton} ${activeItem === item.label ? styles.activeButton : ''} ${item.label === 'Start New Chat' ? styles.chatButton : ''}`}
                            onClick={() => handleItemClick(item.label)}
                        >
                            <span className={activeItem === item.label ? styles.activeIcon : ''}>
                                {item.icon}
                            </span>
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
            <LogoutButton onLogout={onLogout} />
        </aside>
    );
};

export default OuterSidebarContainer;
