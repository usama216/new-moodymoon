import React, { useState, useRef } from 'react';
import { Box } from '@mui/material';
import { FaPlay } from "react-icons/fa";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null); // Reference to the iframe

  const togglePlay = (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the Box container
    setIsPlaying(true); // Set video to play

    // Autoplay the video
    if (videoRef.current) {
      const videoSrc = videoRef.current.src;
      videoRef.current.src = `https://www.youtube.com/embed/xNRJwmlRBNU`; // Autoplay the video on play
    }
  };

  const handleScreenClick = () => {
    setIsPlaying(false); // Hide the video
    if (videoRef.current) {
      const videoSrc = videoRef.current.src.replace("&autoplay=1", ""); // Stop autoplay
      videoRef.current.src = "https://www.youtube.com/embed/xNRJwmlRBNU"; // Reset the video
    }
  };

  // Inline CSS styles
  const styles = {
    videoContainer: {
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'relative',
      width: '100%',
      height: '100vh',
      paddingTop: '2rem', 
      background: `url('/videobg.png') center center/cover no-repeat fixed`, // Background image with fixed position
      backgroundColor: 'black',
      cursor: isPlaying ? 'pointer' : 'default', // Change cursor when video is playing
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.349)', // Lighter overlay color
      boxShadow: isPlaying ? 'inset 10px 90px 700px black, inset 0px 80px 1500px black' : 'inset 0px 80px 80px black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2,
    },
    playButton: {
      backgroundColor: 'white',
      border: '14px solid #706e6eb2',
      padding: '30px 30px',
      fontSize: '30px',
      fontWeight: 'bold',
      color: '#000',
      cursor: 'pointer',
      borderRadius: '50%',
      zIndex: 3,
    },
    iframe: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '50%',
      height: '50%',
      display: isPlaying ? 'block' : 'none', // Show only when playing
      zIndex: 5,
    },
  };

  return (
    <Box style={styles.videoContainer} onClick={handleScreenClick}>
      {/* Overlay with play button */}
      {!isPlaying && (
        <Box style={styles.overlay}>
          <button style={styles.playButton} onClick={togglePlay}>
            <FaPlay style={{ color: 'green' }} />
          </button>
        </Box>
      )}

      {/* YouTube video iframe */}
      <iframe
        ref={videoRef}
        src="https://www.youtube.com/embed/xNRJwmlRBNU"
        allowFullScreen
        title="moody moon video"
        style={styles.iframe}
      />
    </Box>
  );
};

export default VideoPlayer;
