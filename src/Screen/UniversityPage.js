import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectionContext } from '../SelectionContext';
import { data } from '../components/data';

function UniversityPage() {
  const { handleUniversitySelect } = useContext(SelectionContext);
  const navigate = useNavigate();

  const selectUniversity = (university) => {
    handleUniversitySelect(university);
    navigate('/departments');
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>Select a University</h1>
      <div className="card-container">
        {Object.keys(data).map((university) => (
          <div key={university} className="card" onClick={() => selectUniversity(university)}>
            <img src={data[university].image} alt={university} className="card-image" />
            <div className="card-title">{university}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UniversityPage;
