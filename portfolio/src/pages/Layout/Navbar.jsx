import React, { useState } from "react";
import "./Navbar.scss";
import Container from "react-bootstrap/esm/Container";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Footer";
export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const closeNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <Container style={{position:"relative",height:"100%"}}>
        <div className={`page-wrapper pt-5 ${showNavbar ? " ":"open"}`}style={{height:"100%"}}>
          {/* <!-- Header --> */}
          <header id="fixed">
            <div className="hamburger-icon">
              <div
                className={`hamburger-menu ${showNavbar ? "open" : "close"}`}
                onClick={toggleNavbar}
              >
              </div>
            </div>
            <nav
              className={`navbar ${showNavbar ? "open " : "close animate__animated animate__fadeInRight"}`}
            >
              <ul>
                <li>
                  <NavLink to="/" onClick={closeNavbar}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="Resume" onClick={closeNavbar}>Resume</NavLink>
                </li>
                <li>
                  <NavLink to="Porfolio" onClick={closeNavbar}>Projects</NavLink>
                </li>
                <li>
                  <NavLink to="Blogs" onClick={closeNavbar}>Blogs</NavLink>
                </li>
                <li>
                  <NavLink to="Contact" onClick={closeNavbar}>Contact</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <Outlet />
          </main>
          <section>
            {/* Footer */}
            <Footer />
          </section>
        </div>
      </Container>
    </>
  );
}
