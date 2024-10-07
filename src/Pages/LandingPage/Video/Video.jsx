import React, { useState } from 'react';
import { Box, useTheme } from '@mui/material';
import { FaPlay } from "react-icons/fa";


const VideoPlayer = () => {
    const theme = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    const video = document.getElementById('video');
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  // Inline CSS styles
  const styles = {
    videoContainer: {
      position: 'relative',
      width: '100%',
      height: 'auto',
      paddingTop:'2rem', 
      backgroundColor:'black', 
      boxShadow:'inset 10px 10px 100px red '
    },
    video: {
      width: '100%',
      height: 'auto',
    },
    playButton: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white', // Semi-transparent background
      boxShadow:'2px 2px 10px red',
      border: '2px solid red',
      padding: '20px 20px',
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#000',
      cursor: 'pointer',
      borderRadius: '50%',
      zIndex: 10,
      animation: 'vibrate 0.7s infinite',
       // Vibration effect
    },
    vibrateKeyframes: `
    @keyframes vibrate {
      0% { border: 2px solid #ffffff57; box-shadow: 0px 0px  10px #ffffff57; }
      25% { border: 3px solid #ffffff8f; box-shadow: 0px 0px 12px #ffffff57; }
      50% { border: 4px solid #ffffffac; box-shadow: 0px 0px  14px #ffffff57; }
      75% { border: 5px solid #ffffffc0; box-shadow: 0px 0px  16px #ffffff57; }
      100% { border: 6px solid #ffffffd6; box-shadow: 0px 0px  18px #ffffff57; }
    }
  `,  
  };

  return (
    <Box style={styles.videoContainer}>
      <style>{styles.vibrateKeyframes}</style>
      <video id="video" style={styles.video} controls muted>
        <source src="/vd.mp4" type="video/mp4" />
        YOUR Browser does not support this video format
      </video>

      {!isPlaying && (
        <button style={styles.playButton} onClick={togglePlay}>
          <FaPlay style={{color:'green'}}/>
        </button>
      )}
    </Box>
  );
};

export default VideoPlayer;
