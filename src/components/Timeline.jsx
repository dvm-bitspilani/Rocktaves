import * as styles from "./Timeline.module.scss"
import pic1 from "../assets/pic1.png"
import pic2 from "../assets/pic2.png"
import pic3 from "../assets/pic3.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from"framer-motion";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1500 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1500, min: 1050 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 1400, min: 0 },
      items: 1,
    },
  };

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
                    <motion.div className={styles.container}
                        variants={{
                            hidden: {opacity: 0, y: 75},
                            visible: {opacity: 1, y: 0},
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{duration: 0.5, delay: 0.25}}
                    >
                        <div className={styles.header}>step-1<span>-registration</span></div>
                        <div className={styles.text}>Bands will register on the website and will be allotted the <span>date and the venue of their preliminary round</span> in their <span>respective city</span>. For online participants, the communication on the submission will be done separately.</div>
                    </motion.div>
                    <motion.div className={styles.container}
                        variants={{
                            hidden: {opacity: 0, y: 75},
                            visible: {opacity: 1, y: 0},
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{duration: 0.5, delay: 0.25}}
                    >
                        <div className={styles.header}>step-2<span>-preliminary rounds</span></div>
                        <div className={styles.text}>Each band is expected to perform live for <span>15-20 minutes</span> at their <span>chosen city's venue</span>. One winner from each city and one from each of the two online divisions will qualify for the final round that is held at <span>bits pilani</span></div>
                    </motion.div>
                </div>
            </section>
            <section className={`${styles.wrapper} ${styles.finalwrapper}`}>
                <div className={styles.bg2}></div>
                <div className={styles.content}>
                <motion.div className={styles.container}
                        variants={{
                            hidden: {opacity: 0, y: 75},
                            visible: {opacity: 1, y: 0},
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{duration: 0.5, delay: 0.25}}
                    >
                        <div className={styles.header}>
                            step-3
                            <span className={styles.final}>-finals at </span>
                            <span className={styles.oasis}>
                                <span className={styles.main}>oasis'24</span>
                                <span className={styles.main}>oasis'24</span>
                            </span>
                        </div>
                        <div className={styles.text}>Bands that qualified will be invited to play at Oasis, the annual cultural fest of BITS Pilani and the winning band will walk away with the title of the Rocktaves winner at the <span>52nd Oasis</span> along with the prizes which will be  revealed shortly.</div>
                    </motion.div>
                    <div className={styles.pics}>
                        <motion.div className={styles.image}
                            variants={{
                                hidden: {opacity: 0, x: 75},
                                visible: {opacity: 1, x: 0},
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        ><img src={pic1} alt="" /></motion.div>
                        <motion.div className={styles.image}
                            variants={{
                                hidden: {opacity: 0, x: 75},
                                visible: {opacity: 1, x: 0},
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        ><img src={pic2} alt="" /></motion.div>
                        <motion.div className={styles.image}
                            variants={{
                                hidden: {opacity: 0, x: 75},
                                visible: {opacity: 1, x: 0},
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        ><img src={pic3} alt="" /></motion.div>
                    </div>
                    <div className={styles.carousel}>
                        <Carousel
                            responsive={responsive}
                            autoPlay={true}
                            swipeable={true}
                            draggable={true}
                            showDots={true}
                            infinite={true}
                            partialVisible={false}
                            itemClass={styles.carouselItem}
                        >
                            <div className={styles.carouselimage}><img src={pic1} alt="" /></div>
                            <div className={styles.carouselimage}><img src={pic2} alt="" /></div>
                            <div className={styles.carouselimage}><img src={pic3} alt="" /></div>
                        </Carousel>
                    </div>
                </div>
            </section>
        </>
    );
}