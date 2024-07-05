import * as styles from "./Loader.module.scss"

const Loader = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.bg}></div>
            <div className={styles.music}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
        </div>
    );
};

export default Loader;