import React, { useState } from "react";
import "./card.css";
import Popup from "../modal/modal";

export default function ProjectCards() {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-container">
      <Popup setOpen={setOpen} open={open} />
      <div className="card-content">
        <button className="card first-card" onClick={() => setOpen(true)}>
          <div className="front-side">
            <div className="image-box task"></div>
            <p>Task Manager</p>
          </div>
        </button>
        <button className="card second-card" onClick={() => setOpen(true)}>
          <div className="front-side">
            <div className="image-box activre"></div>
            <p>activRE</p>
          </div>
        </button>
        <button className="card third-card" onClick={() => setOpen(true)}>
          <div className="front-side">
            <div className="image-box game"></div>
            <p>Game of Life</p>
          </div>
        </button>
        <button className="card fourth-card" onClick={() => setOpen(true)}>
          <div className="front-side">
            <div className="image-box fourth"></div>
            <p>4th</p>
          </div>
        </button>
      </div>
    </div>
  );
}
