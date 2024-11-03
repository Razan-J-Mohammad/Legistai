import styles from './BasicInformation.module.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Location({ userData }) {
    return (
        <div className={styles.locationContainer}>
            <div className={styles.locationInfo}>
                <FaMapMarkerAlt className={styles.locationIcon} />
                <div>
                    <p className={styles.Label}>Location</p>
                    <p className={styles.locationText}>{userData.location}</p>
                </div>
            </div>
            <div className={styles.locationInfo}>
                <FaPhoneAlt className={styles.locationIcon} />
                <div>
                    <p className={styles.Label}>Phone Number</p>
                    <p className={styles.locationText}>{userData.phone}</p>
                </div>
            </div>
            <div className={styles.locationInfo}>
                <FaEnvelope className={styles.locationIcon} />
                <div>
                    <p className={styles.Label}>Email Address</p>
                    <p className={styles.locationText}>{userData.email}</p>
                </div>
            </div>
        </div>
    );
}
