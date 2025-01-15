import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../components/data";
import { useNavigate } from 'react-router-dom';
import mern from "../assets/full_stack_devlopment.png"
const CourseSelector = () => {
  const navigate = useNavigate();
  const handleBuy = (courseTitle) => {
    navigate('/orderdetails');
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "20px" ,fontFamily:"-moz-initial"}}>Choose a Course</h1>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {courses.map((course) => (
          <div
            key={course.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              width: "300px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              padding: "16px",
              backgroundColor: "#ffffff",
            }}
          >
            <img
              src={course.image}
              alt={course.title}
              style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
            />
            <h3 style={{fontFamily:"-moz-initial"}}>{course.title}</h3>
            <p style={{ fontSize: "14px", color: "#666" }}>{course.description}</p>
            <h4 style={{fontFamily:"-moz-initial",textAlign:"center"}}>399 Rs /-</h4>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "10px" }}>
              <Link to={`/course/${course.id}`}>
                <button
                  style={{
                    padding: "10px 16px",
                    background: "#28A745",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Open
                </button>
              </Link>
              <button
                onClick={() => handleBuy(course.title)}
                style={{
                  padding: "10px 16px",
                  background: "#FFC107",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSelector;
