import React from "react";
import "./ServiceScreen.css";
import service from "../assets/content_c-Photoroom.png"
import service1 from "../assets/Designer-Photoroom.png"
import service2 from "../assets/internship_logo.png"
import service3 from "../assets/project_c-Photoroom.png"
import service4 from "../assets/notes_c-Photoroom.png"
import service5 from "../assets/Design-Photoroom.png"
function ServiceScreen() {
  return (
    <>
      <div className="Service_Outer_Container">
        <div className="service_section_con1">
          <div className="service_heading">Find Your Service Here</div>
          <div className="service_content">
            <div className="service_content_box">
            <a href="/universities"><img src={service4}></img></a>
            <h2>Notes and Material</h2>
            </div>
            <div className="service_content_box">
            <a href="/apply"><img src={service2}></img></a>
            <h2>internships</h2>
            </div>
            <div className="service_content_box">
            <a href="/project"><img src={service3}></img></a>
            <h2>Project Services</h2>
            </div>
            <div className="service_content_box">
            <a href="/courses"><img src={service5}></img></a>
            <h2>Lectures</h2>
            </div>
            <div className="service_content_box">
            <a href="/cm"><img src={service1}></img></a>
            <h2>Ms-office Service</h2>
            </div>
          </div>
        </div>
        <div className="service_section_con2"></div>
        <div className="service_section_con3"></div>
        <div className="service_section_con4"></div>
      </div>
    </>
  );
}

export default ServiceScreen;
