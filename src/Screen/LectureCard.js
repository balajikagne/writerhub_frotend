import React from "react";
import { useParams } from "react-router-dom";
import { courses } from "../components/data";

const LectureCard = () => {
  const { courseId, lectureId } = useParams();

  // Find the course by courseId
  const course = courses.find((course) => course.id === parseInt(courseId));

  if (!course) {
    return <h2>Course not found!</h2>;
  }

  // Find the lecture by lectureId within the selected course
  const lecture = course.lectures.find((lec) => lec.id === parseInt(lectureId));

  if (!lecture) {
    return <h2>Lecture not found!</h2>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px"}}>
      <h1 style={{fontFamily:"-moz-initial"}}>{lecture.title}</h1>
      <img
        src={lecture.image}
        alt={lecture.title}
        style={{ width: "100%", maxWidth: "600px", borderRadius: "8px", marginBottom: "20px" }}
      />
      <a
        href={lecture.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: "10px 16px",
          background: "#28A745",
          color: "#fff",
          borderRadius: "4px",
          textDecoration: "none",
        }}
      >
        Open Lecture
      </a>
    </div>
  );
};

export default LectureCard;
