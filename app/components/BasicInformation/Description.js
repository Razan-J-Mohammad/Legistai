import styles from './BasicInformation.module.css';

export default function Description({ userData }) {
    return (
        <div className={styles.Area}>
            <span className={styles.Label}>Description</span>
            <p>{userData.description}</p>
        </div>
    );
}
