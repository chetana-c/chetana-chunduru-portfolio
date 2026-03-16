import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Education from "./components/Education";
import Career from "./components/Career";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Landing />
        <About />
        <Education />
        <Skills />
        <Career />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
};

export default App;