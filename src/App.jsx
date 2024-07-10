import LandingPage from "./components/LandingPage";
import "./App.css";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import indianocean from "./assets/indianocean.png";
import prestorika from "./assets/prestorika.png";
import parikrama from "./assets/parikrama.png";
import themclones from "./assets/themclones.png";
import pic1 from "./assets/pic1.png";
import pic2 from "./assets/pic2.png";
import pic3 from "./assets/pic3.png";
import bg1 from "./assets/backgrounds/about.png";
import bg2 from "./assets/backgrounds/contact.png";
import bg3 from "./assets/backgrounds/home.png";
import bg4 from "./assets/backgrounds/rules.png";
import bg5 from "./assets/backgrounds/timeline1.png";
import bg6 from "./assets/backgrounds/timeline2.png";
import bg7 from "./assets/backgrounds/winners.png";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Form from "./Form/Form";

function App() {
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const assets = [
      indianocean,
      prestorika,
      parikrama,
      themclones,
      pic1,
      pic2,
      pic3,
      bg1,
      bg2,
      bg3,
      bg4,
      bg5,
      bg6,
      bg7,
    ];

    const load = async () => {
      try {
        await Promise.all(
          assets.map(
            (asset) =>
              new Promise((resolve, reject) => {
                const img = new Image();
                img.src = asset;
                img.onload = () => resolve(img);
                img.onerror = reject;
              })
          )
        );
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    load();
  }, []);

  const handleGoBack = () => {
    window.history.back();
  };

  return isLoading ? (
    <Loader />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="form" element={<Form handleGoBack={handleGoBack} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
