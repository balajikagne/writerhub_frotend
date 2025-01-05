import React from "react";
import "./Assignment.css";
import p1 from "../assets/cse-p-1.jpg"
function Assignment() {
  return (
    <div className="job-card-container">
      <div className="job-card">
        <h1 className="job-headline">Term & Conditions</h1>
        <img src={p1} alt="Job Image" className="job-image" />
        <p className="job-description">
          This is a brief description of the job. It explains the key responsibilities,
          requirements, and any other relevant details.
        </p>
        <a href="/form" className="apply-button">Apply</a >
      </div>
    </div>
  );
}

export default Assignment;
