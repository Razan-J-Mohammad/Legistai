import styles from './BasicInformation.module.css';
import Image from "next/image";

export default function Head({ userData }) {
    return (
        <div className={styles.headcontainer}>
            <div className={styles.imgDetailsContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/Ts.png" alt="ts" width={80} height={80} />
                </div>
                <div className={styles.details}>
                    <div className={styles.title}>{userData.name}</div>
                    <div className={styles.rating}>
                        <span className={styles.star}>⭐</span>
                        <span>{userData.rating} Rating</span>
                    </div>
                </div>
            </div>
            <div>
                <a href="https://www.legistai.com" className={styles.link}>Website Link</a>
            </div>
        </div>
    );
}
