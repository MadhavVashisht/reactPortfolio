import React from "react";
import Navbar from "./component/Navbar";
import Home from "./section/Home";
import About from "./section/About";
import Skills from "./section/Skills";
import Projects from "./section/Projects";
import Experience from "./section/Experience";
import Testimonials from "./section/Testimonials";
import Contact from "./section/Contact";
import Footer from "./section/Footer";
import SplashCursor from './component/SplashCursor'
import IntroAnimation from "./component/IntroAnimation";



const App = () => {
  const [introdone, setIntrodone] = React.useState(false);
  return (
    <>
    {!introdone && <IntroAnimation onfinish={() => setIntrodone(true)} />}

      {introdone &&(
    <div className="relative gradient-bg text-white">
      <SplashCursor/>

      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
    )}
    </>
  );
};

export default App;
