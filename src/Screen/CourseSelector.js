import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../components/data";
import { useNavigate } from 'react-router-dom';
import "./CourseSelector.css"; // Import the CSS file

const CourseSelector = () => {
  const navigate = useNavigate();
  const handleBuy = (courseTitle) => {
    navigate('/orderdetails');
  };

  return (
    <div className="course_container_out">
      <h1 className="course_title">Choose a Course</h1>
      <div className="course_card_container">
        {courses.map((course) => (
          <div key={course.id} className="course_card">
            <img
              src={course.image}
              alt={course.title}
              className="course_image"
            />
            <h3 className="course_title">{course.title}</h3>
            <p className="course_description">{course.description}</p>
            <h4 className="course_price">399 Rs /-</h4>
            <div className="button_container">
              <Link to={`/course/${course.id}`}>
                <button className="open_button">Open</button>
              </Link>
              <button
                onClick={() => handleBuy(course.title)}
                className="buy_button"
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
