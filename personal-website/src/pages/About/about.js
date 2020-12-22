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
                    I am a sophomore at Virginia Tech pursuing a degree in Computer Science. 
                    I am working as a student software developer and undergraduate researcher at the Crowd Intelligence Lab. 
                    We are focused on creating a tool that will help combat misinformation on social media through the use of crowd sourcing and open source intelligence. 
                    I am also an undergraduate teaching assistant, and I help out students in Introduction to Python learn about programming concepts and basic logical programming. 
                    For the spring semester, I have accepted an offer to work with Oracle in their Cloud Native Engineering Team as a Software Engineering Intern.
                  </p>
                  {/* <ul className="info-list">
                    <li>Pursuing a B.S. in Computer Science at Virginia Tech</li>
                    <li>
                      Looking for Software Engineering internships in order to
                      utilize my skills to solve real-world problems
                    </li>
                    <li>Interested in software, mobile, and web development</li>
                  </ul> */}
                </div>
                <div className="skills-section">
                  <h1 className="subtitle">Skills:</h1>
                  <ul className="info-list">
                    <li>Java</li>
                    <li>Python</li>
                    <li>C/C++</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>NodeJS</li>
                    <li>GIT</li>
                  </ul>
                  <p className="skills-small">
                    Java, Python, C/C++, Javascript, React, NodeJS, GIT
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
