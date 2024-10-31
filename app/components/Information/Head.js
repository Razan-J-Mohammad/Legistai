import styles from './information.module.css';
import Image from "next/image";

export default function Head() {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/Ts.png" alt="ts" width={80} height={80} />
            </div>
            <div className={styles.details}>
                <div className={styles.title}>Tran & Sorelle</div>
                <div className={styles.rating}>
                    <span className={styles.star}>⭐</span>
                    <span>4.5 Rating</span>
                </div>
            </div>
            <a href="https://www.legistai.com" className={styles.link}>Website Link</a>
        </div>
    );
}
