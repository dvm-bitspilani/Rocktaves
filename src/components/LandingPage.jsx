import * as styles from "./LandingPage.module.scss";
import Home from "./Home";
import About from "./About";
import Rules from "./Rules";
import Timeline from "./Timeline";
import Winners from "./Winners";
import Contact from "./Contact";
import { Link, Element } from "react-scroll";

export default function LandingPage(){

    return(
        <div className={styles.wrapper}>
            <section className={styles.homewrapper}>
                <div className={styles.bg}></div>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <div className={styles.main}>rocktaves</div>
                        <div className={styles.main}>rocktaves</div>
                        <div className={styles.main}>rocktaves</div>
                    </div>
                    <div className={styles.navbar}>
                        <Link to="about" smooth={true} duration={1000} className={styles.nav}>about</Link>
                        <a href="https://www.bits-oasis.org/rocktaves/form" target="_blank" className={styles.nav}>register</a>
                        <Link to="contact" smooth={true} duration={700} className={styles.nav}>contact</Link>
                    </div>
                </div>
            </section>
            {/* <About /> */}
            <Element name="about">
                <About />
            </Element>
            <Rules />
            <Timeline />
            <Winners />
            <Element name="contact">
                <Contact />
            </Element>
        </div>
    );
}