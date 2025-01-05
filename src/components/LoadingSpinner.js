// LoadingSpinner.js
import React from 'react';
import './LoadingSpinner.css';
import Lottie from 'react-lottie';
import animationData from "../assets/loading-ani.json"
const LoadingSpinner = () => {
    const options = {
      loop: true,
      autoplay: true, // Autoplay the animation
      animationData: animationData, // Your Lottie JSON animation data
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice', // Ensures animation is scaled correctly
      },
    };
  
    return (
      <div className="loading-container">
        <div className="lottie-animation">
          <Lottie options={options} height={200} width={200} />
        </div>
      </div>
    );
  };
  
  export default LoadingSpinner;