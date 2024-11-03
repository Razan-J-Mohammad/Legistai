import React from 'react';
import Profile from '@/app/components/OuterSidebarItems/Profile';
import Dashboard from '@/app/components/OuterSidebarItems/DashBoard';
import Drive from '@/app/components/OuterSidebarItems/Drive';
import Calendar from '@/app/components/OuterSidebarItems/Calendar';
import LawFirmOptions from '@/app/components/OuterSidebarItems/LawFirmOptions';
import Settings from '@/app/components/OuterSidebarItems/Sttings';
import styles from './InnerContanier.module.css';

const InnerContainer = ({ activeItem, userData }) => {
    let content;
    switch (activeItem) {
        case 'Dashboard':
            content = <Dashboard />;
            break;
        case 'Drive':
            content = <Drive />;
            break;
        case 'Profile':
            content = <Profile userData={userData} />;
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
        <div className={styles.InnerContainer}>
            {content}
        </div>
    );
};

export default InnerContainer;
