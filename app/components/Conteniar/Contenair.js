import React from 'react';
import Profile from '../ItemOuterSidebar/Profile';
import Dashboard from '../ItemOuterSidebar/DashBoard';
import Drive from '../ItemOuterSidebar/Drive';
import Calendar from '../ItemOuterSidebar/Calendar';
import LawFirmOptions from '../ItemOuterSidebar/LawFirmOptions';
import Settings from '../ItemOuterSidebar/Sttings';
import styles from './conteniar.module.css';
import InnerSideBar from "../InnerSideBar/InnerSideBar";

const Contenair = ({ activeItem }) => {
    let content;
    switch (activeItem) {
        case 'Dashboard':
            content = <Dashboard />;
            break;
        case 'Drive':
            content = <Drive />;
            break;
        case 'Profile':
            content = <Profile />;
            break;
        case 'Calendar':
            content = <Calendar />;
            break;
        case 'Law Firm Options':
            content = <LawFirmOptions />;
            break;
        case 'Settings':
            content = <Settings />;
            break;
        default:
            content = <Dashboard />;
    }

    return (
        <>
            <div className={styles.profileContainer}>
                {content}
            </div>
            {activeItem === 'Profile' && (
                <div>
                    <InnerSideBar />
                </div>
            )}
        </>
    );
};

export default Contenair;
