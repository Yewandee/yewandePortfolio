import React, { useState } from "react";
import "../header/header.css";


const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleToggle = () => {
    setMobileMenu(!mobileMenu);
  };



  return (
    <section className="navbars bg-dark text-white sticky-top pe-2 ps-2">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid d-flex">
          <a className="navbar-brand text-white" href="/">
            <h3>Yewande</h3>
          </a>

          <button
            className="navbar-toggler text-white "
            type="button"
            onClick={handleToggle}
            aria-controls="navbarNav"
            aria-expanded={mobileMenu ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            {mobileMenu ? (
              <i className="fas fa-times close home-bth text-white"></i>
            ) : (
              <span className="navbar-toggler-icon home-toggle text-white"><i class="fa-solid fa-bars"></i></span>
            )}
          </button>
          <div
            className={`collapse navbar-collapse justify-content-center ${
              mobileMenu ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item ">
                <a className="nav-link text-white" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/my-projects">
                  My Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/contact-me">
                  Contact Me
                </a>
              </li>

              
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
