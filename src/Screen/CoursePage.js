import React from "react";
import { useParams } from "react-router-dom";
import { courses } from "../components/data"; // Import courses from data.js

const CoursePage = () => {
  const { courseId } = useParams(); // Extract courseId from the URL params

  // Find the course by courseId
  const course = courses.find((course) => course.id === parseInt(courseId));

  if (!course) {
    return <h2>Course not found!</h2>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "20px" ,fontFamily:"-moz-initial", color:"white"}}>{course.title}</h1>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {course.lectures.map((lecture) => (
          <div
            key={lecture.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "16px",
              width: "300px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#ffffff",
            }}
          >
            <img
              src={lecture.image}
              alt={lecture.title}
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{fontFamily:"-moz-initial"}}>{lecture.title}</h3>
            <a
              href={lecture.link}
              style={{
                textDecoration: "none",
              }}
            >
              <button
                style={{
                  padding: "10px 16px",
                  background: "#007BFF",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  marginTop: "10px",
                  fontFamily:"-moz-initial"
                }}
              >
                Watch
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
