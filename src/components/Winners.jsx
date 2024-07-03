import * as styles from "./Winners.module.scss"
import indianocean from "../assets/indianocean.png"
import prestorika from "../assets/prestorika.png"
import parikrama from "../assets/parikrama.png"
import themclones from "../assets/themclones.png"

export default function Winners() {
    return (
        <>
            <section className={styles.wrapper}>
                <div className={styles.bg}></div>
                <div className={styles.title}>
                    <div className={styles.word}>
                        <div className={styles.main}>p</div>
                        <div className={styles.main}>a</div>
                        <div className={styles.main}>s</div>
                        <div className={styles.main}>t</div>
                    </div>
                    <div className={styles.word}>
                        <div className={styles.main}>w</div>
                        <div className={styles.main}>i</div>
                        <div className={styles.main}>n</div>
                        <div className={styles.main}>n</div>
                        <div className={styles.main}>e</div>
                        <div className={styles.main}>r</div>
                        <div className={styles.main}>s</div>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <div className={styles.image}><img src={indianocean} alt="" /></div>
                            <div className={styles.caption}>
                                <div className={styles.indian}>indian</div><div>ocean</div>
                            </div>
                        </div>
                        <div className={styles.pic}>
                            <div className={styles.caption}>
                                prestorika
                            </div>
                            <div className={styles.image}><img src={prestorika} alt="" /></div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <div className={styles.image}><img src={parikrama} alt="" /></div>
                            <div className={styles.caption}>
                                parikrama
                            </div>
                        </div>
                        <div className={styles.pic}>
                            <div className={styles.caption}>
                                <div>them</div><div className={styles.indian}>clones</div>
                            </div>
                            <div className={styles.image}><img src={themclones} alt="" /></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}