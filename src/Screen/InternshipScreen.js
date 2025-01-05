import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import betechnos_logo from "../assets/betechnos_logo.png"
function InternshipScreen() {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/formfillup");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Betechnos Internship Registration</h1>
      <img
        src={betechnos_logo} 
        alt="Internship Banner"
        style={styles.image}
      />
      <div style={styles.description}>
        <p>
          <strong>Internship Opportunity</strong> at <strong>BeTechnos Private Limited</strong>
        </p>
        <p>
          Join our exciting <strong>2-month internship program</strong> designed for students eager to gain{" "}
          <strong>real-world experience</strong> and enhance their skills. For just <strong>₹399</strong>, students will receive:
        </p>
        <ul style={styles.list}>
          <li>
            An official <strong>offer letter</strong> at the start of the internship.
          </li>
          <li>
            A <strong>completion certificate</strong> upon successfully finishing the program.
          </li>
        </ul>
        <p>
          This internship provides <strong>hands-on learning</strong> and valuable exposure to industry practices,
          preparing you for future career opportunities. Don’t miss this chance to <strong>build your portfolio</strong>{" "}
          and <strong>stand out!</strong>
        </p>
      </div>
      <button style={styles.button} onClick={handleApplyClick}>
        Apply Now
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  image: {
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    marginBottom: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  description: {
    fontSize: "1.2rem",
    marginBottom: "20px",
    color: "#ffffff",
  },
  list: {
    textAlign: "left",
    margin: "0 auto",
    maxWidth: "500px",
    paddingLeft: "20px",
    fontSize: "1.2rem",
    lineHeight: "1.5",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#5865F2",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default InternshipScreen;
