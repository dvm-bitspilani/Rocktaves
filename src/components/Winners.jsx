import * as styles from "./Winners.module.scss"
import indianocean from "../assets/indianocean.png"
import prestorika from "../assets/prestorika.png"
import parikrama from "../assets/parikrama.png"
import themclones from "../assets/themclones.png"
import { motion } from"framer-motion";

export default function Winners() {
    return (
        <>
            <section className={`${styles.wrapper} ${styles.bigwrapper}`}>
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
                        <motion.div className={styles.pic}
                            variants={{
                                hidden: {opacity: 0, scale: 0},
                                visible: {opacity: 1, scale: 1},
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{duration: 0.75, delay: 0.25}}
                        >
                            <div className={styles.image}><img src={indianocean} alt="" /></div>
                            <div className={styles.caption}>
                                <div className={styles.indian}>indian</div><div>ocean</div>
                            </div>
                        </motion.div>
                        <motion.div className={styles.pic}
                            variants={{
                                hidden: {opacity: 0, scale: 0},
                                visible: {opacity: 1, scale: 1},
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{duration: 0.75, delay: 0.25}}
                        >
                            <div className={styles.caption}>
                                prestorika
                            </div>
                            <div className={styles.image}><img src={prestorika} alt="" /></div>
                        </motion.div>
                    </div>
                    <div className={styles.box}>
                    <motion.div className={styles.pic}
                            variants={{
                                hidden: {opacity: 0, scale: 0},
                                visible: {opacity: 1, scale: 1},
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{duration: 0.75, delay: 0.25}}
                        >
                            <div className={styles.image}><img src={parikrama} alt="" /></div>
                            <div className={styles.caption}>
                                parikrama
                            </div>
                        </motion.div>
                        <motion.div className={styles.pic}
                            variants={{
                                hidden: {opacity: 0, scale: 0},
                                visible: {opacity: 1, scale: 1},
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{duration: 0.75, delay: 0.25}}
                        >
                            <div className={styles.caption}>
                                <div>them</div><div className={styles.indian}>clones</div>
                            </div>
                            <div className={styles.image}><img src={themclones} alt="" /></div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className={`${styles.wrapper} ${styles.smallwrapper}`}>
                <div className={styles.bg}></div>
                <div className={styles.content}>
                    <div className={styles.box}>
                    <motion.div className={styles.pic}
                            variants={{
                                hidden: {opacity: 0, scale: 0},
                                visible: {opacity: 1, scale: 1},
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{duration: 0.75, delay: 0.25}}
                        >
                            <div className={styles.image}><img src={indianocean} alt="" /></div>
                            <div className={styles.caption}>
                                <div className={styles.indian}>indian</div><div>ocean</div>
                            </div>
                        </motion.div>
                        <motion.div className={styles.pic}
                            variants={{
                                hidden: {opacity: 0, scale: 0},
                                visible: {opacity: 1, scale: 1},
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{duration: 0.75, delay: 0.25}}
                        >
                            <div className={styles.caption}>
                                prestorika
                            </div>
                            <div className={styles.image}><img src={prestorika} alt="" /></div>
                        </motion.div>
                    </div>
                    <div className={styles.box}>
                    <motion.div className={styles.pic}
                            variants={{
                                hidden: {opacity: 0, scale: 0},
                                visible: {opacity: 1, scale: 1},
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{duration: 0.75, delay: 0.25}}
                        >
                            <div className={styles.image}><img src={parikrama} alt="" /></div>
                            <div className={styles.caption}>
                                parikrama
                            </div>
                        </motion.div>
                        <motion.div className={styles.pic}
                            variants={{
                                hidden: {opacity: 0, scale: 0},
                                visible: {opacity: 1, scale: 1},
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{duration: 0.75, delay: 0.25}}
                        >
                            <div className={styles.caption}>
                                <div>them</div><div className={styles.indian}>clones</div>
                            </div>
                            <div className={styles.image}><img src={themclones} alt="" /></div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}