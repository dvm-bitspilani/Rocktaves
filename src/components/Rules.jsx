import * as styles from "./Rules.module.scss";
import { motion } from"framer-motion";

export default function Rules() {
    return (
        <>
            <section className={styles.wrapper}>
                <div className={styles.bg}></div>
                <div className={styles.title}>rules</div>
                <motion.div className={styles.content}
                    variants={{
                        hidden: {opacity: 0, y: 75},
                        visible: {opacity: 1, y: 0},
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{duration: 0.5, delay: 0.25}}
                >
                    <div>1.Bands must submit a <span>three to five minute</span> live recording of one of their own works.</div>
                    <div>2.Bands must submit their own <span>original compositions</span> as their submissions.</div>
                    <div>3.Bands based in cities where the preliminary rounds are being hosted are <span>not allowed</span> to register for the online round.</div>
                    <div>4.<span>Separate communication</span> regarding the <span>additional submission</span> for the online round will be relayed to those bands who will be performing in the online preliminary rounds.</div>
                </motion.div>
            </section>
        </>
    );
}