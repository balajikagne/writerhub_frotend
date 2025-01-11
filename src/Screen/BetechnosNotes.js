import React from "react";
import { useNavigate } from "react-router-dom";
import { data1 } from "../components/data";

function BetechnosNotes() {
  const navigate = useNavigate();

  const buynow = () => {
    navigate("/notes/orderdetails");
  };

  const cardPapa = {
    display: "flex",
    flexWrap: "wrap", // Allows items to wrap when there's insufficient space
    justifyContent: "center", // Centers the cards horizontally
    gap: "10px", // Reduced spacing between cards
    margin: "10px 0", // Reduced margin for a tighter layout
  };

  const containerStyle = {
    textAlign: "center",
    color: "black",
    padding: "0",
    margin: "0",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    marginTop: "20px",
    fontSize: "2.5rem",
  };

  const cardStyle = {
    width: "280px", // Slightly reduced width for better fit
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    textAlign: "center",
    backgroundColor: "#fff",
    margin: "0", // Removed margin since spacing is controlled by `gap`
    padding: "20px",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "15px",
  };

  const cardDetailsStyle = {
    textAlign: "center",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    margin: "10px",
    cursor: "pointer",
    fontSize: "1rem",
    textDecoration: "none",
    width: "200px",
    display: "inline-block",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Betechnos Notes</h1>
      <div style={cardPapa}>
        {data1.map((item, index) =>
          item.subObjects.map((sub, subIndex) => (
            <div style={cardStyle} key={`${index}-${subIndex}`}>
              <img src={sub.image} alt={sub.name} style={imageStyle} />
              <div style={cardDetailsStyle}>
                <p>{sub.description}</p>
                <a
                  href="https://drive.google.com/file/d/1-RG6EWh7rqEYAi_OcQwdGmsdZbaKb6J4/view?usp=drivesdk"
                  style={buttonStyle}
                >
                  {sub.buttons.actionButton}
                </a>
                <button style={buttonStyle} onClick={buynow}>
                  {sub.buttons.buyButton}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BetechnosNotes;
