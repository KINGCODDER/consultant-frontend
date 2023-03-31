import React from "react";
import logo from "../Resources/logo.png";
import "../Style/Navbar.css";

function Navbar() {
  return (
    <>
      <header className="bg-theme-blue">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="link m-2">
            <a href="/" className="border-end border-light">
              <i className="bi bi-clock-fill"></i> We are open 24/7
            </a>
            <i className="bi bi-envelope-fill"></i>
            <a href="/">mail@mail.com</a>
          </div>
          <div className="social-link">
            <a href="/">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="/">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="/">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="/">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>
      </header>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <img src={logo} alt="" style={{ width: "4%" }} />
            <a className="navbar-brand ms-2" href="/">
              Busnis
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Project
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
