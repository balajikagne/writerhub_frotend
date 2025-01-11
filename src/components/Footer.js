import React from "react";
import IMG from "../assets/writer-hub.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="outer_container12">
      <div className="left_container12">
        <div className="img_container12">
          <img src={IMG} alt="Writer Hub Logo" />
          <div className="privacy-policy-container">
            <a href="https://drive.google.com/file/d/11xP6KhavktovopnH7k7omOemxDMSOxY6/view?usp=drivesdk" className="privacy-policy-btn">Privacy Policy</a>
          </div>
        </div>
        <div className="social_connection12">
          <ul>
            <li>
              <a
                className="btn_social"
                href="/"
                style={{ fontSize: "1rem", textDecoration: "none" }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="btn_social"
                href="/service"
                style={{ fontSize: "1rem", textDecoration: "none" }}
              >
                Service
              </a>
            </li>
            <li>
              <a
                className="btn_social"
                href="/jobs"
                style={{ fontSize: "1rem", textDecoration: "none" }}
              >
                Jobs
              </a>
            </li>
            <li>
              <a
                className="btn_social"
                href="/contact"
                style={{ fontSize: "1rem", textDecoration: "none" }}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="btn_social"
                href="/about"
                style={{ fontSize: "1rem", textDecoration: "none" }}
              >
                Contact
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a
                className="btn_social"
                href="https://www.linkedin.com/company/writerhub24/about/?viewAsMember=true"
              >
                <i
                  className="fa-brands fa-linkedin"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "1rem",
                    marginLeft: "-30px",
                  }}
                ></i>
              </a>
            </li>
            <li>
              <a
                className="btn_social"
                href="https://www.instagram.com/writerhub.in/"
              >
                <i
                  className="fa-brands fa-instagram"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "1rem",
                    marginLeft: "-30px",
                  }}
                ></i>
              </a>
            </li>
            <li>
              <a className="btn_social" href="https://wa.link/kv93vv">
                <i
                  className="fa-brands fa-whatsapp"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "1rem",
                    marginLeft: "-30px",
                  }}
                ></i>
              </a>
            </li>
            <li>
              <a className="btn_social" href="/about">
                <i
                  className="fa-brands fa-x"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "1rem",
                    marginLeft: "-30px",
                  }}
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="right_container">
        At WRITERHUB, we connect you with the best professionals and service
        providers to make your projects and ideas come to life. Whether you're
        looking for experts in web development, graphic design, marketing,
        content creation, or any other service, our platform is designed to
        meet all your needs.
        <br />
        <br />
        We offer a seamless, user-friendly experience where you can easily find
        and hire top-tier professionals for every stage of your project. With a
        focus on quality, reliability, and customer satisfaction, we ensure
        that each service provided is tailored to meet your specific goals and
        objectives.
        <br />
        <br />
        Our platform empowers both service seekers and providers, creating a
        community where collaboration and innovation thrive. No matter the size
        of your project, we have the resources and expertise to help you
        succeed. Start your journey today with writerhub – the trusted platform
        for all your service needs.
      </div>
    </div>
  );
}

export default Footer;
