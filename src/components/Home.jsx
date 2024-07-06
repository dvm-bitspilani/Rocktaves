import * as styles from "./Home.module.scss";

export default function Home() {


    return (
        <>
            <section className={styles.wrapper}>
                <div className={styles.bg}></div>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <div className={styles.main}>rocktaves</div>
                        <div className={styles.main}>rocktaves</div>
                        <div className={styles.main}>rocktaves</div>
                    </div>
                    <div className={styles.navbar}>
                        <div className={styles.nav}>about</div>
                        <div className={styles.nav}>register</div>
                        <div className={styles.nav}>contact</div>
                    </div>
                </div>
            </section>
        </>
    );
}