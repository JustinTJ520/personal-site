import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CertificationTabView = () => {
  const [activeTab, setActiveTab] = useState("itil");

  const getTabComponent = () => {
    switch (activeTab) {
      case "itil":
        return (
          <embed src="media/ITILCert.pdf" className="pdf-embed" id="itil" />
        );
      case "lpilinux":
        return (
          <embed
            src="media/LinuxCert.pdf"
            className="pdf-embed"
            id="lpilinux"
          />
        );
      case "ciscocybersecurity":
        return (
          <embed
            src="media/CiscoCert.pdf"
            className="pdf-embed"
            id="ciscocybersecurity"
          />
        );
      default:
        return (
          <embed src="media/ITILCert.pdf" className="pdf-embed" id="itil" />
        );
    }
  };

  return (
    <div>
      <nav className="tab-nav">
        <button onClick={() => setActiveTab("itil")}>ITIL Foundations</button>
        <button onClick={() => setActiveTab("lpilinux")}>
          LPI Linux Essentials
        </button>
        <button onClick={() => setActiveTab("ciscocybersecurity")}>
          CISCO Cybersecurity
        </button>
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

export default CertificationTabView;
