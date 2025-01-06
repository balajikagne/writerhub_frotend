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
      <div style={styles.card}> {/* Smaller card wrapper */}
        <img
          src={betechnos_logo}
          alt="Internship Banner"
          style={styles.image}
        />
        <div style={styles.details}>
          <h1 style={styles.heading}>Betechnos Internship Registration</h1>
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
    backgroundColor: "#f5f5f5", // Light gray background
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "20px",
    width: "80%", // Smaller card width
    maxWidth: "800px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd", // Light border for definition
  },
  image: {
    width: "150px",
    height: "auto",
    borderRadius: "5px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
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
    textAlign: "left",
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
  },
};

export default InternshipScreen;
