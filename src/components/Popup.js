import React, { useState } from 'react';
import './Popup.css';

const Popup = ({ isOpen, onClose, card }) => {
  // Define the state at the top level
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // If card data is missing, return null (but don't return before the hook)
  if (!isOpen || !card) return null;

  // Handle previous image navigation
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? card.images.length - 1 : prevIndex - 1
    );
  };

  // Handle next image navigation
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === card.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        {/* Close button */}
        <button className="close-btn" onClick={onClose}>×</button>

        {/* Popup content */}
        <div className="popup-content">
          <h2>{card.title}</h2>

          {/* Image Slider */}
          <div className="slider">
            <button className="slider-btn" onClick={handlePrevImage}>
              &#8249;
            </button>
            <img
              src={card.images[currentImageIndex]}
              alt={card.title}
              className="popup-image"
              onClick={() => window.open(card.images[currentImageIndex], '_blank')}
              title="Click to view full size"
            />
            <button className="slider-btn" onClick={handleNextImage}>
              &#8250;
            </button>
          </div>

          <h5>Rs {card.price} /-</h5>
          <p>{card.des}</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
