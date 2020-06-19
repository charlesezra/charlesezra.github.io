import React from "react";
import "./card.css";

export default function ProjectCards() {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card first-card">
          <div className="front-side">
            <div className="image-box task"></div>
            <p>Task Manager</p>
          </div>
          <div className="back-side">
            <p>Back</p>
          </div>
        </div>
        <div className="card second-card">
          <div className="front-side">
            <div className="image-box activre"></div>
            <p>activRE</p>
          </div>
          <div className="back-side">
            <p>Back</p>
          </div>
        </div>
        <div className="card third-card">
          <div className="front-side">
            <div className="image-box game"></div>
            <p>Game of Life</p>
          </div>
          <div className="back-side">
            <p>Back</p>
          </div>
        </div>
      </div>
    </div>
  );
}
