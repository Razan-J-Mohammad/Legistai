import React from 'react';
import styles from './InnerSideBar.module.css';
export default function InnerSideBar() {
    return (

        <aside className={styles.innerSidebar}>
            <div className={styles.innerprof}>
                <h4>Profile</h4>
                <p>Manage your details and personal preference here</p>
                <div className={styles.innerSide}>
                    <h2>InnerSideBar</h2>
                </div>

            </div>

        </aside>

    );
}
