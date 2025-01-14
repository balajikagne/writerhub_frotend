import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SelectionContext } from "../SelectionContext";
import { data2, data1 } from "../components/data";

function UniversityPage() {
  const { handleUniversitySelect, handleDataSelect } = useContext(SelectionContext); // Ensure handleDataSelect is retrieved
  const navigate = useNavigate();

  const selectUniversity = (university) => {
    handleUniversitySelect(university);
    navigate("/departments");
  };

  const selectData = (noteItem) => {
    handleDataSelect(noteItem); // Use the correct function from context
    navigate("/betechnos/notes");
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", fontWeight: "bold", color: "white" }}>
        Select a University
      </h1>

      {/* University Cards */}
      <div className="card-container">
        {Object.keys(data2).map((university) => (
          <div
            key={university}
            className="card"
            onClick={() => selectUniversity(university)}
          >
            <img
              src={data2[university].image}
              alt={university}
              className="card-image"
            />
            <div className="card-title">{university}</div>
          </div>
        ))}
      </div>

      {/* Notes Cards */}
      <div className="card-container">
        {data1.map((noteItem) => (
          <div
            key={noteItem.name}
            className="card"
            onClick={() => selectData(noteItem)}
          >
            <img
              src={noteItem.image}
              alt={noteItem.name}
              className="card-image"
            />
            <div className="card-title">{noteItem.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UniversityPage;
