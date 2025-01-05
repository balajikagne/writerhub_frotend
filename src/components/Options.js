import React from 'react';
import { useNavigate } from 'react-router-dom';

const cardData = [
  {
    id: 1,
    title: 'CSE',
    description: 'Computer Science Engineering',
    image: 'https://via.placeholder.com/150?text=CSE',
    path: '/cse/projects',
  },
  {
    id: 2,
    title: 'IT',
    description: 'Information Technology',
    image: 'https://via.placeholder.com/150?text=IT',
    path: '/it/projects',
  },
  {
    id: 3,
    title: 'Mechanical',
    description: 'Mechanical Engineering',
    image: 'https://via.placeholder.com/150?text=Mechanical',
    path: '/cm',
  },
  {
    id: 4,
    title: 'Civil',
    description: 'Civil Engineering',
    image: 'https://via.placeholder.com/150?text=Civil',
    path: '/cm',
  },
];

function Options() {
  const navigate = useNavigate();

  // Redirect to the appropriate page on card click
  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div style={styles.container}>
      <h1>Select Your Department</h1>
      <div style={styles.cardContainer}>
        {cardData.map((card) => (
          <div
            key={card.id}
            className="card"
            style={styles.card}
            onClick={() => handleCardClick(card.path)}
          >
            <img src={card.image} alt={card.title} style={styles.image} />
            <h2 style={styles.title}>{card.title}</h2>
            <p style={styles.description}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    padding: '20px',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '30px',
  },
  card: {
    width: '200px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    cursor: 'pointer',
    backgroundColor: '#fff',
    padding: '20px',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  cardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
  },
  image: {
    width: '100%',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  title: {
    fontSize: '1.5em',
    margin: '15px 0 10px',
  },
  description: {
    fontSize: '0.9em',
    color: '#555',
  },
};

export default Options;

