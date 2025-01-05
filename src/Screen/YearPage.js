import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { data } from '../components/data';
import { SelectionContext } from '../SelectionContext';

function YearPage() {
  
  const { selectedUniversity, selectedDepartment, handleYearSelect } = useContext(SelectionContext);
  const navigate = useNavigate();

  const years = selectedUniversity && selectedDepartment 
    ? Object.keys(data[selectedUniversity].departments[selectedDepartment].years) 
    : [];

  const handleYearClick = (year) => {
    handleYearSelect(year);
    navigate('/subjects'); // Navigate to the subjects page
  };
  useEffect(() => {
    if (!selectedUniversity) {
      navigate("/universities"); // Redirect using React Router
    }
  }, [selectedUniversity, navigate]);
  return (
    <div>
      <h1 style={{ textAlign: "center", fontWeight: "bold", color: "white" }}>
        Select a Year for {selectedDepartment} Department
      </h1>
      <div className="card-container">
        {years.map((year) => (
          <div key={year} className="card" onClick={() => handleYearClick(year)}>
            <img
              src={data[selectedUniversity].departments[selectedDepartment].years[year].image}
              alt={year}
              className="card-image"
            />
            <div className="card-title">{year}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YearPage;
