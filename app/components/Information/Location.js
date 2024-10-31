import styles from './information.module.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Location() {
    return (
        <div className={styles.locationContainer}>
            <div className={styles.locationInfo}>
                <FaMapMarkerAlt className={styles.locationIcon} />
                <div>
                    <p className={styles.locationLabel}>Location</p>
                    <p className={styles.locationText}>8502 Preston Rd. Inglewood, Maine 98380</p>
                </div>
            </div>
            <div className={styles.locationInfo}>
                <FaPhoneAlt className={styles.locationIcon} />
                <div>
                    <p className={styles.locationLabel}>Phone Number</p>
                    <p className={styles.locationText}>+011 65523 66522</p>
                </div>
            </div>
            <div className={styles.locationInfo}>
                <FaEnvelope className={styles.locationIcon} />
                <div>
                    <p className={styles.locationLabel}>Email Address</p>
                    <p className={styles.locationText}>arunsing@gmail.com</p>
                </div>
            </div>
        </div>
    );
}
