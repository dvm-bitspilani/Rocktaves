import * as styles from "./LandingPage.module.scss";
import Home from "./Home";
import About from "./About";
import Rules from "./Rules";
import Timeline from "./Timeline";
import Winners from "./Winners";
import Contact from "./Contact";
import { Link, Element } from "react-scroll";
import 'animate.css';
import { useEffect, useRef, useState } from "react";

export default function LandingPage() {
    const [title, setTitle] = useState("ROCKTAVES");
    const rocktavesElementRef = useRef(null);

    useEffect(() => {
        const rocktavesElement = rocktavesElementRef.current;

        if (rocktavesElement) {
            let intervalId = null;

            const handleMouseOver = () => {
                intervalId = setInterval(() => {
                    const newTitle = [...title].map((char) => {
                        return Math.random() < 0.5 ? char.toUpperCase() : char.toLowerCase();
                    }).join('');
                    setTitle(newTitle);
                }, 200);
            };

            const handleMouseLeave = () => {
                clearInterval(intervalId);
                setTitle("ROCKTAVES");
            };

            rocktavesElement.addEventListener('mouseover', handleMouseOver);
            rocktavesElement.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                clearInterval(intervalId);
                rocktavesElement.removeEventListener('mouseover', handleMouseOver);
                rocktavesElement.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, []);

    return (
        <div className={styles.wrapper}>
            <section className={styles.homewrapper}>
                <div className={styles.bg}></div>
                <div className={styles.header}>
                    <div className={`${styles.title} animate__animated animate__jackInTheBox`} ref={rocktavesElementRef}>
                        <div className={styles.main}>{title}</div>
                        <div className={styles.main}>{title}</div>
                        <div className={styles.main}>{title}</div>
                    </div>
                    <div className={styles.navbar}>
                        <Link to="about" smooth={true} duration={1000} className={`${styles.nav} animate__animated animate__bounce`}>about</Link>
                        <a href="https://www.bits-oasis.org/rocktaves/form" target="_blank" className={`${styles.nav} animate__animated animate__bounce`}>register</a>
                        <Link to="contact" smooth={true} duration={700} className={`${styles.nav} animate__animated animate__bounce`}>contact</Link>
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