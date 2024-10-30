import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import '../../variables.css'

export default function Header() {
  return (
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Image src="/logo.png" alt="Logo" width={156} height={41} />
        </div>

        <div className={styles.searchContainer}>
          <i className={`fa fa-magnifying-glass ${styles.searchIcon}`}></i>
          <input type="text" placeholder="Search" className={styles.searchInput} />
        </div>

        <div className={styles.actions}>
          <LanguageSelector />
          <NotificationIcon />
          <UserProfile />
        </div>
      </header>
  );
}

const LanguageSelector = () => (
    <div className={styles.languageContainer}>
      <Image src="/us.webp" alt="American Flag" width={24} height={24} className={styles.flagIcon} />
      <span>ENG</span>
      <i className={`fa fa-angle-down ${styles.dropdownIcon}`}></i>
    </div>
);

const NotificationIcon = () => (
    <div className={styles.notification}>
      <i className="fa fa-bell"></i>
      <span className={styles.notificationDot}></span>
    </div>
);

const UserProfile = () => (
    <div className={styles.profile}>
      <Image src="/razan1.jpeg" alt="User Profile" width={40} height={40} className={styles.profileImage} />
      <div className={styles.profileInfo}>
        <span className={styles.profileName}>Razan Mohamad</span>
        <span className={styles.profileTitle}>Full Stack</span>
      </div>
    </div>
);
