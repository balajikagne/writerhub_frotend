import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectionContext } from '../SelectionContext';

function BetechnosNotes() {
  const { selectedData } = useContext(SelectionContext);
  const navigate = useNavigate();

  // Function for handling the 'Buy Now' action
  const buynow = () => {
    navigate("/orderdetails")
  };

  useEffect(() => {
    if (!selectedData) {
      navigate("/universities"); // Redirect if no data is selected
    }
  }, [selectedData, navigate]);

  // Return early if selectedData is not available
  if (!selectedData || !selectedData.subObject) {
    return null; // Prevent rendering until data is available
  }

  const { subObject } = selectedData;

  // Inline CSS styles
  const containerStyle = {
    textAlign: 'center',
    color: 'black',
    padding: '0',
    margin: '0',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    marginTop: '20px',
    fontSize: '2.5rem',
  };

  const cardStyle = {
    width: '300px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    textAlign: 'center',
    backgroundColor: '#fff',
    margin: '20px auto', // Centered with auto margin
    padding: '20px',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '15px',
  };

  const cardDetailsStyle = {
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    margin: '10px',
    cursor: 'pointer',
    fontSize: '1rem',
    textDecoration: 'none', // Ensure no underline for links
    width: '200px', // Ensures equal width for both the button and anchor
    display: 'inline-block', // Makes the anchor tag act like a block
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>{subObject.name}</h1>
      <div style={cardStyle}>
        <img
          src={subObject.image}
          alt={subObject.name}
          style={imageStyle}
        />
        <div style={cardDetailsStyle}>
          <p>{subObject.description}</p>
          {/* Anchor tag that looks like a button and works properly */}
          <a href="/writerhub.in" style={buttonStyle}>
            {subObject.buttons.actionButton}
          </a>
          {/* 'Buy Now' button with functionality */}
          <button style={buttonStyle} onClick={buynow}>
            {subObject.buttons.buyButton}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BetechnosNotes;
