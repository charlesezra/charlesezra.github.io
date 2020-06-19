import React from "react";
import "./resume.css";
import ResumeInfo from "../../components/info/info";

export default function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-content">
        <div className="buttons-container">
          <button className="btn text-btn">Text</button>
          <button className="btn formatted-btn">Formatted</button>
        </div>
        <div className="text-preview">
          <ResumeInfo />
        </div>
        <div className="pdf-preview">
          <iframe
            className="google-embed"
            src="https://drive.google.com/file/d/1-iOmUuzbkAtxZITIoH8x9kl3uD4191Mf/preview"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
