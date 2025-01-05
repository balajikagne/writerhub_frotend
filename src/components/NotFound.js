import React from 'react';
import { Link } from 'react-router-dom';
import cc from "../assets/confused_charater.png"
const NotFound = () => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    //   background: '#f2f2f2',
      fontFamily: "'Comic Sans MS', cursive, sans-serif",
      color: '#333',
    },
    wrapper: {
      textAlign: 'center',
    },
    title: {
      fontSize: '6em',
      color: 'white',
      margin: 0,
    },
    subtitle: {
      fontSize: '2em',
      margin: '0.5em 0',
    },
    text: {
      fontSize: '1.2em',
      margin: '1em 0',
      color: '#ffffff',
    },
    image: {
      width: '250px',
      height: 'auto',
      marginTop: '20px',
    },
    backHome: {
      display: 'inline-block',
      marginTop: '20px',
      padding: '10px 20px',
      color: '#fff',
      backgroundColor: 'blue',
      borderRadius: '5px',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
    backHomeHover: {
      backgroundColor: '#ff4500',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h1 style={styles.title}>404</h1>
        <h2 style={styles.subtitle}>Oops! Page Not Found</h2>
        <p style={styles.text}>We can't seem to find the page you're looking for.</p>
        
        {/* Cartoon character or image */}
        <div>
          <img
            src={cc}
            alt="Confused Character"
            style={styles.image}
          />
        </div>

        <Link to="/" style={styles.backHome}>Go Back Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
