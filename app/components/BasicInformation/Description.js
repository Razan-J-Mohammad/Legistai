import styles from './BasicInformation.module.css';

export default function Description() {
    return (
        <div className={styles.Area}>
            <span className={styles.Label}>Description</span>
            <p>Empowering justice with expert legal solutions. Our law firm specializes in providing tailored, strategic
                counsel to navigate complex legal challenges. Trust our experienced team to safeguard your rights and
                achieve favorable outcomes</p>
        </div>
    );
}
