import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h1>Projects</h1>
      <div>
        <h2>Movie Recommendation Program</h2>
        <p>
          A command-line application using the MovieLens dataset to recommend
          films based on user ratings and metadata (e.g., genre, tags,
          popularity). Future enhancements include incorporating the TMDb API
          and improving filtering logic.
          <br />
          GitHub:
          <a href="https://github.com/JustinTJ520/MovieRecommender">
            Movie Recommendation Program
          </a>
        </p>
        <h2>Car Auction Website Scraper</h2>
        <p>
          Python-based web scraper that extracts make, model, year, and sale
          prices from popular auction websites (Cars and Bids, Bring a Trailer).
          Includes filtering logic to exclude unsold or "Bid to" listings.
          <br />
          GitHub:{" "}
          <a href="https://github.com/JustinTJ520/CarPriceScraper">
            Car Auction Website Scraper
          </a>
        </p>
      </div>
    </section>
  );
};

export default Projects;
