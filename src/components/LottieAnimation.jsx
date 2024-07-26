// src/components/LottieAnimation.jsx
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animations/animation-file.json'; // Adjust the path to your JSON file

const LottieAnimation = () => {
  return (
    <div
      style={{
        position: 'absolute', // Position the animation precisely
        top: '20px',         // Adjust the top position
        left: '400px',        // Adjust the left position
        width: '800px',      // Set the width of the animation
        height: '1000px',     // Set the height of the animation
        overflow: 'hidden',  // Hide any overflow if the animation is larger
        bottom: '70px', //Adjust the bottom position
        zIndex: 1000         // Ensure it is on top of other elements if needed
      }}
    >
      <Lottie
        animationData={animationData}
        style={{ width: '100%', height: '100%' }} // Set width and height to 100% of the container
      />
    </div>
  );
};

export default LottieAnimation;
