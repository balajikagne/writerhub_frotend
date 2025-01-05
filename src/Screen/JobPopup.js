import React, { useState } from "react";
import "./JobPopup.css";

const JobPopup = ({ isOpen, onClose, card }) => {
  // Define the state at the top level
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // If card data is missing, return null (but don't return before the hook)
  if (!isOpen || !card) return null;

  return (
    <div className="jobpop-overlay">
      <div className="jobpop">
        {/* Close button */}
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        {/* jobpop content */}
        <div className="jobpop-content">
          <h2>{card.title}</h2>

          {/* Image Slider */}
          <div className="slider">
            <img
              src={card.image}
              alt={card.title}
              className="jobpop-image"
              onClick={() =>
                window.open(card.image, "_blank")
              }
              title="Click to view full size"
            />
          </div>

          <h5>Rs {card.price} /-</h5>
          <p>{card.des}</p>
        </div>
      </div>
    </div>
  );
};

export default JobPopup;
