import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { data1 } from "../components/data";
import LoadingSpinner from "../components/LoadingSpinner"; // Import your loading spinner

function BetechnosNotes() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State for loading

  const buynow = () => {
    navigate("/notes/orderdetails", { state: { scrollToTop: true } });
  };

  const cardPapa = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    margin: "10px 0",
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
    color:"white"
  };

  const cardStyle = {
    width: "280px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    textAlign: "center",
    backgroundColor: "#fff",
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

  const searchFormStyle = {
    margin: "20px 0",
    textAlign: "center",
  };

  const searchInputStyle = {
    width: "60%",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ddd",
    marginRight: "10px",
  };

  const searchButtonStyle = {
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const filteredData = data1
    .flatMap((item) => item.subObjects)
    .filter((sub) =>
      sub.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading spinner

    setTimeout(() => {
      setIsLoading(false); // Hide spinner after results are ready
    }, 1000); // Simulate loading time
  };

  if (isLoading) {
    return <LoadingSpinner />; // Show the loading spinner
  }

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Betechnos Notes</h1>
      <form style={searchFormStyle} onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={searchInputStyle}
        />
        <button type="submit" style={searchButtonStyle}>
          Search
        </button>
      </form>
      {filteredData.length === 0 ? (
        <div>
          <h2 style={{color:"white"}}>No Results Found</h2>
          <p style={{color:"white"}}>Try searching for something else.</p>
        </div>
      ) : (
        <div style={cardPapa}>
          {filteredData.map((sub, index) => (
            <div style={cardStyle} key={index}>
              <img src={sub.image} alt={sub.name} style={imageStyle} />
              <div style={cardDetailsStyle}>
                <p>{sub.description}</p>
                <a href={sub.link} style={buttonStyle}>
                  {sub.buttons.actionButton}
                </a>
                <button style={buttonStyle} onClick={buynow}>
                  {sub.buttons.buyButton}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BetechnosNotes;
