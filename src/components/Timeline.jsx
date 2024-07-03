import * as styles from "./Timeline.module.scss"

export default function Timeline() {
    return (
        <>
            <section className={styles.wrapper}>
                <div className={styles.bg1}></div>
                <div className={styles.title}>
                    <div className={styles.main}>t</div>
                    <div className={styles.main}>i</div>
                    <div className={styles.main}>m</div>
                    <div className={styles.main}>e</div>
                    <div className={styles.main}>l</div>
                    <div className={styles.main}>i</div>
                    <div className={styles.main}>n</div>
                    <div className={styles.main}>e</div>
                </div>
                <div className={styles.content}>
                    <div className={styles.container}>
                        <div className={styles.header}>step-1<span>-registration</span></div>
                        <div className={styles.text}>Bands will register on the website and will be allotted the <span>date and the venue of their preliminary round</span> in their <span>respective city</span>. For online participants, the communication on the submission will be done separately.</div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.header}>step-2<span>-preliminary rounds</span></div>
                        <div className={styles.text}>Each band is expected to perform live for <span>15-20 minutes</span> at their <span>chosen city's venue</span>. One winner from each city and one from each of the two online divisions will qualify for the final round that is held at <span>bits pilani</span></div>
                    </div>
                </div>
            </section>
            <section className={styles.wrapper}>
                <div className={styles.bg2}></div>
                <div className={styles.content}>
                    <div className={styles.container}>
                        <div className={styles.header}>
                            step-3
                            <span className={styles.final}>-finals at </span>
                            <span className={styles.oasis}>
                                <span className={styles.main}>oasis'24</span>
                                <span className={styles.main}>oasis'24</span>
                            </span>
                        </div>
                        <div className={styles.text}>Bands that qualified will be invited to play at Oasis, the annual cultural fest of BITS Pilani and the winning band will walk away with the title of the Rocktaves winner at the <span>52nd Oasis</span> along with the prizes which will be  revealed shortly.</div>
                    </div>
                </div>
            </section>
        </>
    );
}