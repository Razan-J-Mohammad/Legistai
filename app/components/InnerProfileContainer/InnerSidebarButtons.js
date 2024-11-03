"use client";
import styles from './InnerSidebarButtons.module.css';
export default function InnerSidebarButtons({ sections, activeIndex, setActiveIndex }) {

    return (
        <div className={styles.sidebar}>
            <ul>
                {sections.map((section, index) => (
                    <li key={section.name}>
                        <button
                            className={`${styles.sidebarButton} ${activeIndex === index ? styles.active : ''}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            {section.name}
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    );
}
