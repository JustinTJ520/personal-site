import { useState } from "react";
import "./App.css";

import About from "./Components/About.jsx";
import Projects from "./Components/Projects.jsx";
import Skills from "./Components/Skills.Jsx";
import Contact from "./Components/Contact.Jsx";
import Navbar from "./Components/Navbar.jsx";
import TabView from "./Components/Tabview.jsx";

function App() {
  return (
    <div className="App">
      <TabView />
    </div>
  );
}

export default App;
