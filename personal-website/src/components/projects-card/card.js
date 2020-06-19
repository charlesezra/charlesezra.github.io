import React from "react";
import "./card.css";

export default function ProjectCards() {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card first-card">
          <div className="front-side">
            <p>Task Manager</p>
          </div>
          <div className="back-side">
            <p>Back</p>
          </div>
        </div>
        <div className="card second-card">
          <div className="front-side">
            <p>activRE</p>
          </div>
          <div className="back-side">
            <p>Back</p>
          </div>
        </div>
        <div className="card third-card">
          <div className="front-side">
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
