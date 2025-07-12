import React from "react";

const BrickBreakerVideo = () => {
  return (
    <div className="video-container">
      <p className="text-x1 font-bold mb-4">🕹️Brick Breaker Demo Video:</p>
      <video width="100%" height="400" controls>
        <source src="media/Breakout.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BrickBreakerVideo;
