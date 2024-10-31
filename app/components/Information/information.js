import styles from './information.module.css';
import Head from './Head';
import Location from './Location';
import Description from './Description';

export default function Information({ showBasicInfo }) {
    return (
        <div className={styles.info}>
            <div className={styles.head}>
                <Head />
            </div>
            <div className={styles.location}>
                <Location />
            </div>
            <div className={styles.description}>
                {showBasicInfo ? <Description /> : null}
            </div>
        </div>
    );
}
