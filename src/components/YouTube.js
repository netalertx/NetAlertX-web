import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId }) => {
  const [playerWidth, setPlayerWidth] = useState(640); // Initial width, you can set your default width here

  useEffect(() => {
    const calculateWidth = () => {
      // Example calculation based on screen size
      const screenWidth = window.innerWidth;
      const maxWidth = Math.min(screenWidth, 1200); // Set your maximum width here if needed
      const calculatedWidth = Math.min(0.9 * maxWidth, 640); // Adjust multiplier or minimum width as needed
      setPlayerWidth(calculatedWidth);
    };

    // Calculate width initially
    calculateWidth();

    // Recalculate width on window resize
    window.addEventListener('resize', calculateWidth);
    
    // Clean up event listener
    return () => window.removeEventListener('resize', calculateWidth);
  }, []);

  const opts = {
    height: '390',
    width: String(playerWidth), // Convert width to string for the YouTube component
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      rel: 0, // Prevents recommended videos from showing
    },
  };

  return (
    <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YouTubePlayer;
