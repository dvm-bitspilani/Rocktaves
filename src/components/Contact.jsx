import * as styles from "./Contact.module.scss"

export default function Contact() {
    return (
        <>
            <section className={styles.wrapper}>
                <div className={styles.bg}></div>
                <div className={styles.title}>about us</div>
                <div className={styles.containerflex}>
                    <div className={styles.content}>
                        Rocktaves is organized by the Association of Rock, BITS Pilani (ARBITS). Our goal is to foster and uplift the Indian music scene and promote it in the university amongst the student body. Arbits began as a club with the initial goal of organising and conducting Rocktaves which has been a great launch pad for budding artists in the past, with PRior winners recieving cash prizes of one lakh and upwards.
                    </div>
                    <div className={styles.contactbox}>
                        <div className={styles.contact}>contact us</div>
                        <div className={styles.people}>
                            <div className={styles.box}>
                                <div className={styles.name}>roshan raj</div>
                                <div className={styles.phone}>97607 01365</div>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.name}>sania siddiqui</div>
                                <div className={styles.phone}>94543 68468</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}