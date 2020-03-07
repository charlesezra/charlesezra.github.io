import React from 'react';
import './HomePage.css';

const AboutTemplate = () => (
    <div>
        <div className="ui top fixed menu">
            <a className="item" href="#about">Charles Ezra Cabauatan</a>
            <a className="item" href="#experience">Skills</a>
            <a className="item" href="#experience">Projects</a>
            <a className="item" href="https://drive.google.com/file/d/1ZqMAWv9L1T-crxQM3U53dLi3Pqd2m8n1/view?usp=sharing">Resume</a>
            <div className="right menu">
                <a className="item">Contact</a>
            </div>
        </div>
        <div className="about-container">
        <div className="profile-photo"></div>
            <h1 className="title">Charles Ezra Cabauatan</h1>
            <div className="subtitle">
                Student | Developer 
            </div>
            <div className="subtext">
                I am a student at Virginia Tech studying Computer Science.
                I am looking for a summer internship position to be able to gain 
                experience and improve my skill set.
            </div>
        </div>
    </div>
);

const ExperienceTemplate = () => (
    <div>
        <div className="experience-container">
            <div className="skills-container">
                <div className="box-title">
                    <p>Skills / Languages</p>
                </div>
                <div className="box-content">
                    <div className="skills-box">
                        <div className="skills">
                            <ul>
                                <li>Java</li>
                                <li>C</li>
                                <li>Visual Basic</li>
                                <li>Python</li>
                                <li>Javascript</li>
                            </ul>
                        </div>
                        <div className="skills">
                            <ul>
                                <li>ReactJS</li>
                                <li>GIT</li>
                                <li>JavaFX</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects-container">
                <div className="box-title">
                    <p>Independent Projects</p>
                </div>
                <div className="box-content">
                    <div className="projects">
                        <ul>
                            <li 
                                onClick={() =>{
                                    window.open(
                                        "https://github.com/charlesezra/Task-Manager"
                                    );
                                }} >
                                Task Manager</li>
                            <li
                               onClick={() =>{
                                window.open(
                                    "https://github.com/charlesezra/Game-of-Life"
                                );
                            }}>
                            Conway's Game of Life</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="contact-container">
                <div className="box-title">
                    <p>Contact Me / Talk to Me</p>
                </div>
                <div className="box-content">
                    <div className="contact-box">
                        <div className="contact">
                            <div className="one" href="charlesc18@vt.edu">
                                <i className="fas fa-envelope-square"></i>
                            </div>
                        </div>
                        <div className="contact">
                            <div 
                                className="two"
                                onClick={() =>{
                                    window.open(
                                        "https://www.linkedin.com/in/charles-ezra-cabauatan-77baa6191/"
                                    );
                                }}    
                            >
                                <i className="fab fa-linkedin"></i>
                            </div>
                        </div>
                        <div className="contact">
                            <div 
                                className="three"
                                onClick={() =>{
                                    window.open("https://github.com/charlesezra");
                                }}
                            >
                                <i className="fab fa-github-square"></i>
                            </div>
                        </div>
                        <div className="contact">
                            <div className="four">
                                <i className="fab fa-snapchat"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
);

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <section id="about"><AboutTemplate/></section>
                <section id="experience"><ExperienceTemplate/></section>
            </div>
        );
    }
};

export default HomePage;