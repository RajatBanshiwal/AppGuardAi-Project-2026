import React, { useEffect } from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Layout from "./Components/Layout.jsx";
import HomePage from "./Pages/HomePage.jsx";
import Contact from "./Pages/Contact.jsx";
import Team from "./Pages/team.jsx";
import AboutUs from "./Pages/Aboutus.jsx";
import SoftwareDownload from "./Pages/SoftwareDownload.jsx"
import FeaturesSection from "./Pages/Features.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animate only once
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="features" element={<FeaturesSection />} />
          <Route path="contact" element={<Contact />} />
          <Route path="team" element={<Team />} />
          <Route path="download" element={<SoftwareDownload />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
