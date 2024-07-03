import * as styles from "./About.module.scss"

export default function About() {
    return (
        <>
            <section className={styles.wrapper}>
                <div className={styles.bg}></div>
                <div className={styles.title}>
                    <div className={styles.main}>r</div>
                    <div className={styles.main}>o</div>
                    <div className={styles.main}>c</div>
                    <div className={styles.main}>k</div>
                    <div className={styles.main}>t</div>
                    <div className={styles.main}>a</div>
                    <div className={styles.main}>v</div>
                    <div className={styles.main}>e</div>
                    <div className={styles.main}>s</div>
                </div>
                <div className={styles.content}>
                    Rocktaves is one of the oldest semi-professional rock
                    band competitions in India which has acted as a propellor
                    for India's premiere rock groups like <span>PARIKRAMA,</span> <span>INDIAN
                    OCEAN,</span> <span>SUPERFUZZ,</span> <span>PRESTORIKA,</span> <span>THEM CLONES</span> and <span>EUPHORIA</span>
                    who have taken part and won the competition at different
                    points in it's history
                </div>
            </section>
        </>
    );
}