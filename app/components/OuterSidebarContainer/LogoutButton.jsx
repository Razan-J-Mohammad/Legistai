
import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import styles from './OuterSidebarContainer.module.css';

const LogoutButton = () => {
    return (
        <button className={`${styles.sidebarButton} ${styles.logoutButton}`}>
            <FaSignOutAlt /> Log Out
        </button>
    );
};

export default LogoutButton;
