import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrickBreakerVideo from "./BrickBreakerVideo";

const ProjectTabView = () => {
  const [activeTab, setActiveTab] = useState("movierec");

  const getTabComponent = () => {
    switch (activeTab) {
      case "movierec":
        return (
          <div>
            <h2>🎞️Movie Recommendation Program🎞️</h2>
            <p>
              A command-line application using the MovieLens dataset to
              recommend films based on user ratings and metadata (e.g., genre,
              tags, popularity). Future enhancements include incorporating the
              TMDb API and improving filtering logic.
              <br />
              GitHub:
              <a href="https://github.com/JustinTJ520/MovieRecommender">
                Movie Recommendation Program
              </a>
              <br />
              <a
                href="https://movie-recommender-jj.streamlit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Try it here!
              </a>
            </p>
          </div>
        );
      case "webscraper":
        return (
          <div>
            <h2>🚗Car Auction Website Scraper🚗</h2>
            <p>
              Python-based web scraper that extracts make, model, year, and sale
              prices from popular auction websites (Cars and Bids, Bring a
              Trailer). Includes filtering logic to exclude unsold or "Bid to"
              listings.
              <br />
              GitHub:{" "}
              <a href="https://github.com/JustinTJ520/CarPriceScraper">
                Car Auction Website Scraper
              </a>
            </p>
          </div>
        );
      case "brickbreaker":
        return (
          <div>
            <h2>🕹️Brick Breaker Game🕹️</h2>
            <p>
              A Brick Breaker game made using OpenGL. Has several levels,
              particle effects, and textures.
              <br />
              <BrickBreakerVideo />
            </p>
          </div>
        );
      default:
        return (
          <div>
            <h2>Movie Recommendation Program</h2>
            <p>
              A command-line application using the MovieLens dataset to
              recommend films based on user ratings and metadata (e.g., genre,
              tags, popularity). Future enhancements include incorporating the
              TMDb API and improving filtering logic.
              <br />
              GitHub:
              <a href="https://github.com/JustinTJ520/MovieRecommender">
                Movie Recommendation Program
              </a>
              <br />
              <a
                href="https://movie-recommender-jj.streamlit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Try it here!
              </a>
            </p>
          </div>
        );
    }
  };

  return (
    <div>
      <nav className="tab-nav">
        <button onClick={() => setActiveTab("movierec")}>
          Movie Recommendation Program
        </button>
        <button onClick={() => setActiveTab("webscraper")}>
          Car Auction Website Scraper
        </button>
        <button onClick={() => setActiveTab("brickbreaker")}>
          Brick Breaker Game
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

export default ProjectTabView;
