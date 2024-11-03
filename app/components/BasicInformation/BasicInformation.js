import styles from './BasicInformation.module.css';
import Head from './Head';
import Location from './Location';
import Description from './Description';

export default function BasicInformation({ userData }) {
    if (!userData) return <div>Loading...</div>;

    return (
        <div className={styles.info}>
            <div className={styles.head}>
                <Head userData={userData} />
            </div>
            <div className={styles.location}>
                <Location userData={userData} />
            </div>
            <div className={styles.description}>
                <Description userData={userData} />
            </div>
        </div>
    );
}

