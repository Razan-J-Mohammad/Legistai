import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src="/logo.png" alt="Logo" className={styles.logo} width={156.09} height={41.39} />
      </div>

      <div className={styles.searchContainer} >
        <i className={`fa fa-magnifying-glass ${styles.searchIcon}`}></i>
        <input type="text" placeholder="Search" className={styles.searchInput} />
      </div>
      <div className={styles.actions}>
        <div className={styles.languageContainer}>
          <div className={styles.flagIcon}>
            <Image src="/us.webp" alt="American Flag" width={24} height={24} style={{ objectFit: 'cover' }} />
          </div>
          <span>ENG</span>
          <i className={`fa fa-angle-down ${styles.dropdownIcon}`}></i>
        </div>

        <div className={styles.notification}>
          <i className="fa fa-bell"></i>
          <span className={styles.notificationDot}></span>
        </div>

        <div className={styles.profile}>
          <div className={styles.profileImage}>
            <Image src="/razan1.jpeg" alt="User Profile" width={40} height={40} />
          </div>
          <div className={styles.profileInfo}>
            <span className={styles.profileName}>Razan Mohamad</span>
            <span className={styles.profileTitle}>Full Stack</span>
          </div>
        </div>
      </div>
    </header>
  );
}
