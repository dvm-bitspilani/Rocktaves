import * as styles from "./LandingPage.module.scss";
import Home from "./Home";
import About from "./About";
import Rules from "./Rules";
import Timeline from "./Timeline";
import Winners from "./Winners";
import Contact from "./Contact";

export default function LandingPage(){

    return(
        <div className={styles.wrapper}>
            <Home />
            <About />
            <Rules />
            <Timeline />
            <Winners />
            <Contact />
        </div>
    );
}