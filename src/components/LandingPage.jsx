import * as styles from "./LandingPage.module.scss";
import Home from "./Home";
import About from "./About";
import Rules from "./Rules";
import Timeline from "./Timeline";

export default function LandingPage(){
    return(
        <>
            <Home />
            <About />
            <Rules />
            <Timeline />
        </>
    );
}