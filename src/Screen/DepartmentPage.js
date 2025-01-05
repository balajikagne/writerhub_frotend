import React, { useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectionContext } from '../SelectionContext';
import { data } from '../components/data';

function DepartmentPage() {
  const { selectedUniversity, handleDepartmentSelect } = useContext(SelectionContext);
  const navigate = useNavigate();
  const departments = selectedUniversity ? Object.keys(data[selectedUniversity].departments) : [];

  const selectDepartment = (department) => {
    handleDepartmentSelect(department);
    navigate('/years');
  };
useEffect(() => {
    if (!selectedUniversity) {
      navigate("/universities"); // Redirect using React Router
    }
  }, [selectedUniversity, navigate]);
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>Select a Department</h1>
      <div className="card-container">
        {departments.map((dept) => (
          <div key={dept} className="card" onClick={() => selectDepartment(dept)}>
            <img src={data[selectedUniversity].departments[dept].image} alt={dept} className="card-image" />
            <div className="card-title">{dept}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DepartmentPage;
