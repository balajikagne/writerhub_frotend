import React, { useContext ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectionContext } from '../SelectionContext';
import { data } from '../components/data';

function SubjectPage() {
  const { selectedUniversity, selectedDepartment, selectedYear } = useContext(SelectionContext);
  const subjects = selectedUniversity && selectedDepartment && selectedYear
    ? data[selectedUniversity].departments[selectedDepartment].years[selectedYear].subjects
    : [];

  const navigate = useNavigate();

  const handlePreview = (subject) => {
    navigate('/preview', { state: { subject } }); // Navigate to the preview page with subject details
  };

  const handleBuy = (subject) => {
    // alert(`Buying ${subject.name}`); // Replace this with actual buy logic
    navigate('/order');
  };
useEffect(() => {
    if (!selectedUniversity) {
      navigate("/universities"); // Redirect using React Router
    }
  }, [selectedUniversity, navigate]);
  return (
    <div>
      <h1 style={{ textAlign: "center", fontWeight: "bold", color: "white" }}>
        Subjects for {selectedDepartment} - Year {selectedYear}
      </h1>
      <div className="card-container">
        {subjects.map((subject) => (
          <div key={subject.name} className="card">
            <img src={subject.image} alt={subject.name} className="card-image" />
            <div className="card-title">{subject.name}</div>
            <div style={styles.buttons}>
              <div  onClick={() => handlePreview(subject)} style={styles.button}>Preview</div>
              <div  onClick={() => handleBuy(subject)} style={styles.button}>Order</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: '300px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    backgroundColor: '#fff',
    margin: '20px',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '1em',
    cursor: 'pointer',
  },
  outer_container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
};

export default SubjectPage;
