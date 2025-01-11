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
              <strong>Internship Opportunity</strong> at{" "}
              <strong>BeTechnos Private Limited</strong>
            </p>
            <p>
              Join our exciting <strong>2-month internship program</strong>{" "}
              designed for students eager to gain{" "}
              <strong>real-world experience</strong> and enhance their skills.
              For just <strong>₹399</strong>, students will receive:
            </p>
            <ul style={styles.list}>
              <li>
                An official <strong>offer letter</strong> at the start of the
                internship.
              </li>
              <li>
                A <strong>completion certificate</strong> upon successfully
                finishing the program.
              </li>
            </ul>
            <p>
              This internship provides <strong>hands-on learning</strong> and
              valuable exposure to industry practices, preparing you for future
              career opportunities. Don’t miss this chance to{" "}
              <strong>build your portfolio</strong> and <strong>stand out!</strong>
            </p>
            <div style={styles.highlightSection}>
              <h2 style={styles.highlightHeading}>
                📢 Special Opportunity for Students!
              </h2>
              <p>
                🌟 <strong>Share & Earn a Full-Stack Project Certificate!</strong> 🌟
              </p>
              <p>
                🔹 Are you part of the BeTechnos Internship Program? <br />
                🔹 Share this internship opportunity with 5 friends and unlock
                exclusive benefits!
              </p>
              <p>
                <strong>💼 Rewards:</strong> <br />
                ✔ 1 Software Project (Worth ₹2000 – Absolutely FREE!) <br />
                ✔ Completion Certificate for the Project
              </p>
              <p>
                📌 <strong>Steps to Claim:</strong>{" "}
                <a href="https://www.writerhub.in/apply">https://www.writerhub.in/apply</a>
              </p>
              <ol style={styles.list}>
                <li>
                  Share the internship link with 5 friends:{" "}
                  <a href="https://www.writerhub.in/apply">
                    https://www.writerhub.in/apply
                  </a>
                </li>
                <li>
                  Ask them to mention your name in the registration form.
                </li>
                <li>
                  Once 5 friends register, you’ll get access to the project!
                </li>
              </ol>
              <p>
                🎯 <strong>Don’t Miss Out! Start Sharing Now</strong>
              </p>
            </div>
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
    boxSizing: "border-box",
    flexWrap: "wrap",
  },
  image: {
    width: "150px",
    height: "auto",
    borderRadius: "5px",
    flexShrink: 0,
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
  highlightSection: {
    backgroundColor: "#FFFAE6",
    padding: "10px",
    borderRadius: "5px",
    marginTop: "15px",
  },
  highlightHeading: {
    fontSize: "1.2rem",
    marginBottom: "10px",
    color: "#FF4500",
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
    alignSelf: "flex-start",
  },
  "@media (max-width: 600px)": {
    card: {
      flexDirection: "column",
      textAlign: "center",
    },
    image: {
      width: "100px",
      marginBottom: "10px",
    },
    button: {
      alignSelf: "center",
    },
  },
};

export default InternshipScreen;
