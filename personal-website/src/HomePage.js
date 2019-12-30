import React from 'react';
import './HomePage.css';

const AboutTemplate = () => (
    <div>
        <div className="ui top fixed menu">
            <a className="item">Charles Ezra Cabauatan</a>
            <a className="item">Skills</a>
            <a className="item">Projects</a>
            <a className="item">Resume</a>
            <div className="right menu">
                <a className="item">Contact</a>
            </div>
        </div>
        <div className="about-container">
        <div class="profile-photo"></div>
            <h1 className="title">Charles Ezra Cabauatan</h1>
            <div className="subtitle">
                Student | Developer 
            </div>
            <div className="subtext">
                I am a freshman at <strong>Virginia Tech</strong> studying Computer Science.
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
                    <h2>Currently Working ...</h2>
                </div>
            </div>
            <div className="contact-container">
                <div className="box-title">
                    <p>Contact Me</p>
                </div>
                <div className="box-content">
                    
                </div>
            </div>

        </div>
    </div>
);

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <AboutTemplate />
                <ExperienceTemplate />
            </div>
        );
    }
};

export default HomePage;