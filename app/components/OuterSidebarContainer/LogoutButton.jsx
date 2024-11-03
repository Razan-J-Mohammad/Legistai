
import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import styles from './OuterSidebarContainer.module.css';

const LogoutButton = ({ onLogout }) => {
    return (
        <button className={`${styles.sidebarButton} ${styles.logoutButton}`} onClick={onLogout}>
            <FaSignOutAlt /> Log Out
        </button>
    );
};

export default LogoutButton;
