import React from 'react';
import './HomePage.css';

const AboutTemplate = () => (
    <div>
        <div className="ui top fixed menu">
            <a className="item">Charles Cabauatan</a>
            <a className="item">Skills</a>
            <a className="item">Resume</a>
            <a className="item">Projects</a>
            <div className="right menu">
                <a className="item">Contact</a>
            </div>
        </div>
        <div className="about-container">
            <div>
                <div class="profile-photo"></div>
                <h1 className="title">Charles Ezra Cabauatan</h1>
                <div className="subtitle">
                    Student | Developer 
                </div>
                <div className="subtext">
                    I am currently a freshman at Virginia Tech studying Computer Science.
                    I am looking for an internship position to be able to gain experience
                    and improve my skill set.
                </div>
                <div className="prompt"> 
                    Read More
                    <br/><br/>
                    <i class="big angle double down icon"></i>
                </div>
            </div>
        </div>
    </div>
);

const SkillsTemplate = () => (
    <div>
        <div className="skills-container">
            <div>
                <h1>My Skills</h1>
            </div>
        </div>
    </div>
);

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <AboutTemplate />
                <SkillsTemplate />
            </div>
        );
    }
};

export default HomePage;