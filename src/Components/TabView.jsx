import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills.Jsx";
import Contact from "./Contact.Jsx";
import Certifications from "./Certifications.jsx";

const TabView = () => {
  const [activeTab, setActiveTab] = useState("about");

  const getTabComponent = () => {
    switch (activeTab) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
      case "certifications":
        return <Certifications />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <nav className="tab-nav">
        <button onClick={() => setActiveTab("about")}>About</button>
        <button onClick={() => setActiveTab("projects")}>Projects</button>
        <button onClick={() => setActiveTab("skills")}>Skills</button>
        <button onClick={() => setActiveTab("certifications")}>
          Certifications
        </button>
        <button onClick={() => setActiveTab("contact")}>Contact</button>
      </nav>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
        >
          {getTabComponent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TabView;
