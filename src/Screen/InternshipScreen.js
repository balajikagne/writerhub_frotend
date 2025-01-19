import React from "react";
import { useNavigate } from "react-router-dom";
import betechnos_logo from "../assets/betechnos_logo.png";

function InternshipScreen() {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/formfillup", { state: { scrollToTop: true } }); // Pass state to trigger scrolling
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src={betechnos_logo}
          alt="Internship Banner"
          style={styles.image}
        />
        <div style={styles.details}>
          <h1 style={styles.heading}>Betechnos Internship Registration</h1>
          <div style={styles.description}>
            <p>
              <strong>Internship Opportunity</strong> at <a href="https://www.betechnos.com" target="_blank">BeTechnos Private Limited</a>
            </p>
            <p>
              <strong>Location : </strong><a href="https://maps.app.goo.gl/p2MEsM8b5e4yHyEx7">Click here</a>
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
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    padding: "20px",
    minHeight: "100vh",
  },
  card: {
    display: "flex",
    backgroundColor: "#f5f5f5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "20px",
    width: "90%",
    maxWidth: "800px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    boxSizing: "border-box", // Ensure padding is included in width
    flexWrap: "wrap", // Allow wrapping on smaller devices
  },
  image: {
    width: "150px",
    height: "auto",
    borderRadius: "5px",
    flexShrink: 0, // Prevent image from shrinking
  },
  details: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    textAlign: "left",
  },
  heading: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    color: "#333",
  },
  description: {
    fontSize: "1rem",
    marginBottom: "10px",
    color: "#555",
  },
  list: {
    margin: "0",
    paddingLeft: "20px",
    fontSize: "1rem",
    lineHeight: "1.5",
  },
  button: {
    padding: "8px 16px",
    fontSize: "1rem",
    backgroundColor: "#5865F2",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    alignSelf: "flex-start", // Align button to the left
  },
  // Add responsive styles for smaller devices
  "@media (max-width: 600px)": {
    card: {
      flexDirection: "column", // Stack items vertically on small screens
      textAlign: "center", // Center-align text for better readability
    },
    image: {
      width: "100px", // Smaller image for small screens
      marginBottom: "10px",
    },
    button: {
      alignSelf: "center", // Center the button on small screens
    },
  },
};

export default InternshipScreen;
