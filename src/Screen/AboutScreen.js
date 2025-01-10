import React from 'react';
import './AboutScreen.css';
import writerhub from "../assets/writer-hub.png"
const AboutScreen = () => {
  const buttonStyle = {
    width: '135px',
    backgroundColor: '#1065b7',
    textAlign: 'center',
    fontWeight: '800',
    padding: '11px 0px',
    color: 'white',
    fontSize: '12px',
    display: 'inline-block',
    textDecoration: 'none',
    borderRadius: '3.229px',
  };
  return (
    <div className="about-container">
      {/* Headline */}
      <h1 className="about-headline">About Us</h1>

      {/* Image */}
      <div className="image-container">
        <img src={writerhub} alt="About Us" className="about-image" />
      </div>

      {/* Description */}
      <div className="about-description">
        <p>
        WriterHub is a comprehensive platform designed for all your writing and project needs. At WriterHub, we specialize in a variety of services that cater to professionals, students, and businesses alike. Whether you’re looking to create high-quality documents, commission custom write-ups, or browse and purchase completed projects, WriterHub has you covered.

Our Document Creation service helps users produce polished, professional documents tailored to specific requirements, perfect for business proposals, academic work, and creative projects. Through our Write-Up Writing service, users can commission expert writers to craft well-researched and engaging content on any topic. From blog posts to research articles, our team ensures top-notch quality.
        </p>
        <p>
        In addition to custom services, WriterHub also offers Project Selling, where users can browse, buy, and sell completed projects, providing a convenient marketplace for unique, ready-made work. WriterHub’s goal is to make content creation and project acquisition easier, faster, and more accessible. Join us and bring your ideas to life with the help of our expert services!
        </p>
      </div>
    </div>
  );
};

export default AboutScreen;

