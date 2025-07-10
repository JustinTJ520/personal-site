import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Projects from "./Components/Projects.jsx";
import Skills from "./Components/Skills.Jsx";
import Contact from "./Components/Contact.Jsx";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
