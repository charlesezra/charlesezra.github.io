import React from "react";
import "./about.css";
import ProjectCards from "../../components/projects-card/card";

export default function About() {
  return (
    <div className="about-container">
      <div className="content">
        <div className="banner-container">
          <div className="banner-image">
            <div className="banner-name">
              <p className="banner-text">Charles Ezra Cabauatan</p>
            </div>
          </div>
        </div>
        <div className="information-container">
          <div className="information">
            <div className="image-container">
              <div className="image"></div>
            </div>
            <div className="description-container">
              <div className="description">
                <div className="about-section">
                  <h1 className="subtitle">About me:</h1>
                  <p>
                  I am a junior majoring in Computer Science at Virginia Tech. For the past spring & summer, I worked with Oracle on their Cloud Native Engineering Team as a Software Engineer Co-op where I had a chance to work with standing up a new microservice and maintaining established tools. Currently, I am a teaching assistant for the CS department, and I help out students with improving their Python, GIT, and SQL concepts. My main interests are software, web, and cloud development, but I am open to learning new skills and would be willing to work hard in order to learn technologies used in your company. I am seeking an internship for Summer 2022.
                  </p>
                </div>
                <div className="skills-section">
                  <h1 className="subtitle">Skills:</h1>
                  <ul className="info-list">
                    <li>Java</li>
                    <li>Python</li>
                    <li>C/C++</li>
                    <li>Javascript</li>
                    <li>SQL</li>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                    <li>Flask</li>
                  </ul>
                  <p className="skills-small">
                    Java, Python, C/C++, Javascript, SQL, Docker, Kubernetes
                  </p>
                </div>
              </div>
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
