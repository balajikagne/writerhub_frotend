import React from 'react';
import csoon from "../assets/Design3-Photoroom.png";
const ComingSoon = () => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: "'Comic Sans MS', cursive, sans-serif",
    },
    wrapper: {
      textAlign: 'center',
      color: '#333',
    },
    title: {
      fontSize: '3em',
      color: '#ffffff',
    },
    text: {
      fontSize: '1.5em',
      margin: '0.5em 0',
    },
    character: {
      width: '200px',
      height: 'auto',
      marginTop: '20px',
    },
    countdownText: {
      fontSize: '1.2em',
      marginTop: '20px',
      color: '#555',
    }
    
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h1 style={styles.title}>Coming Soon!</h1>
        <p style={styles.text}>We're working hard to bring this page to life. Stay tuned!</p>
        
        {/* Cartoon/anime character */}
        <div>
          <img
            src={csoon}
            alt="Anime Character"
            style={styles.character}
          />
        </div>

        
      </div>
    </div>
  );
};

export default ComingSoon;
