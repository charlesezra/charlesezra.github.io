import React from "react";
import "./about.css";
import ProjectCards from "../../components/projects-card/card";

export default function About() {
  return (
    <div className="about-container">
      <div className="content">
        <div className="image-container">
          <div className="image"></div>
        </div>
        <div className="description-container">
          <div className="description">
            <div className="about-section">
              <h1 className="subtitle">About me:</h1>
              <ul className="info-list">
                <li>Pursuing a B.S. in Computer Science at Virginia Tech</li>
                <li>
                  Looking for Software Engineering internships in order to
                  utilize my skills to solve real-world problems
                </li>
                <li>Interested in software, mobile, and web development</li>
              </ul>
            </div>
            <div className="skills-section">
              <h1 className="subtitle">Skills:</h1>
              <ul className="info-list">
                <li>Java</li>
                <li>Python</li>
                <li>C</li>
                <li>Javascript</li>
                <li>React</li>
                <li>NodeJS</li>
                <li>GIT</li>
              </ul>
              <p className="skills-small">
                Java, Python, C, Javascript, React, NodeJS, GIT
              </p>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project">
            <ProjectCards />
          </div>
        </div>
      </div>
    </div>
  );
}
