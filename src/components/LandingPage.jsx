import * as styles from "./LandingPage.module.scss";
import Home from "./Home";
import About from "./About";
import Rules from "./Rules";
import Timeline from "./Timeline";
import Winners from "./Winners";
import Contact from "./Contact";
import { useRef } from "react";

export default function LandingPage(){

    const about = useRef(null);

    const handleClick = () => {
        about.current?.scrollIntoView({behavior: 'smooth'})
    }

    return(
        <div className={styles.wrapper}>
            <Home navigation={handleClick}/>
            <About ref={about}/>
            <Rules />
            <Timeline />
            <Winners />
            <Contact />
        </div>
    );
}