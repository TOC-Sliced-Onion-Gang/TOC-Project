import React, { useState } from 'react';
import '../CSS/Progressbar.css'

const ProgressBarWithDots = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  return (
    <div className="progress-bar">
      <div className="progress-track"></div>
      <div className="dots-container">
        {Array.from({ length: 7 }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ProgressBarWithDots;