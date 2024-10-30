import React from 'react';
import styles from './Sidebar.module.css';
import { FaHome, FaCloud, FaUser, FaCalendarAlt, FaGavel, FaCog, FaSignOutAlt,FaComments  } from 'react-icons/fa';

export default function OuterSidebar() {
    return (
        <aside className={styles.outerSidebar}>
            <h1>Welcome to the Legistai!</h1>
            <ul>
                <li><FaHome/> Dashboard</li>
                <li><FaCloud/> Drive</li>
                <li className={styles.profile} ><FaUser/> Profile</li>
                <li><FaCalendarAlt/> Calendar</li>
                <li><FaGavel/> Law Firm Options</li>
                <li><FaCog/> Settings</li>
                <li  className={styles.chat} ><FaComments/> Start New Chat</li>

                <li className={styles.logout}><FaSignOutAlt/> Log Out</li>
            </ul>
        </aside>
    );
}
