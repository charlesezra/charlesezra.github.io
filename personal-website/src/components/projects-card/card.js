import React, { useState } from "react";
import "./card.css";
import Popup from "../modal/modal";

export default function ProjectCards() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  return (
    <div className="card-container">
      <Popup setOpen={setOpen} open={open} setName={setName} name={name} />
      <div className="card-content">
        <button
          className="card first-card"
          onClick={() => (setOpen(true), setName("taskmanager"))}
        >
          <div className="front-side">
            <div className="image-box task"></div>
            <p>Task Manager</p>
          </div>
        </button>
        <button
          className="card second-card"
          onClick={() => (setOpen(true), setName("activre"))}
        >
          <div className="front-side">
            <div className="image-box activre"></div>
            <p>activRE</p>
          </div>
        </button>
        <button
          className="card third-card"
          onClick={() => (setOpen(true), setName("gameoflife"))}
        >
          <div className="front-side">
            <div className="image-box game"></div>
            <p>Game of Life</p>
          </div>
        </button>
        <div className="card fourth-card">
          <div className="front-side">
            <div className="image-box fourth"></div>
            <p>4th</p>
          </div>
        </div>
      </div>
    </div>
  );
}
