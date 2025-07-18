import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h1>⌨️ Relevant Skills ⌨️</h1>
      <div id="skills-container">
        <div className="skill-box">
          <h3>Languages</h3>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>C++</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="skill-box">
          <h3>Tools</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>GitLab</li>
            <li>VSCode</li>
            <li>Jupyter</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>Docker</li>
            <li>API/REST</li>
            <li>React</li>
          </ul>
        </div>
        <div className="skill-box">
          <h3>Systems</h3>
          <ul>
            <li>Windows</li>
            <li>Linux CLI</li>
            <li>Home Networking</li>
            <li>PC Building and Maintenance</li>
          </ul>
        </div>
        <div className="skill-box">
          <h3>Concepts</h3>
          <ul>
            <li>Object Oriented Programming</li>
            <li>Recommendation Systems</li>
            <li>Version Control</li>
            <li>Cybersecurity</li>
            <li>Agile</li>
            <li>Scrum</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
