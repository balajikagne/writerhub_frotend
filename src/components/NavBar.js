import React, { useState } from "react";
import logo from "../assets/writer-hub.png";
import "./Navbar.css";
function NavBar() {
  const [menu, setMenu] = useState(true);
  return (
    <>
      <div className="nav_container">
        <div className="container_logo">
          <a href="/">
            <img src={logo} alt="Notespoint"></img>
          </a>
        </div>
        <div className="btn_container">
          <ul className="btn_inner_container" type="none">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Service">Services</a>
            </li>
            <li>
              <a href="/apply">Jobs</a>
            </li>
            <li>
              <a href="/contactus">Contact</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
        <div className="btn_container2">
          {menu ? (
            <>
              <div
                className="before_click"
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </>
          ) : (
            <>
              <div
                className="after_click"
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                <i
                  class="fa-brands fa-x"
                  style={{
                    fontSize: "30px",
                  }}
                ></i>
              </div>
            </>
          )}
        </div>
      </div>
      {menu ? (
        <></>
      ) : (
        <>
          {" "}
          <div className="btn_container3">
            <div className="btn_after_click">
              <div className="btn_inner_container">
                <a href="/">Home</a>

                <a href="/Service">Services</a>
                <a href="/apply">Jobs</a>
                <a href="/contactus">Contact</a>

                <a href="/about">About</a>
              </div>
            </div>
            <div className="logo_in_menu">
              <a href="">
                <i
                  class="fa-brands fa-linkedin"
                  style={{
                    fontSize: "30px",
                  }}
                ></i>
              </a>
              <a href="">
                <i
                  class="fa-brands fa-instagram"
                  style={{
                    fontSize: "30px",
                  }}
                ></i>
              </a>
              <a href="">
                <i
                  class="fa-brands fa-whatsapp"
                  style={{
                    fontSize: "30px",
                  }}
                ></i>
              </a>
              <a href="">
                <i
                  class="fa-brands fa-x"
                  style={{
                    fontSize: "30px",
                  }}
                ></i>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default NavBar;
