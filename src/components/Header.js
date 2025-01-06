import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <button className="hamburger" onClick={toggleMenu}>
            <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
          </button>
          <nav className={`main-nav ${isMenuOpen ? "show" : ""}`}>
            <ul>
              <li className={location.pathname === "/" ? "active" : ""}>
                <Link to="/image">Image</Link>
              </li>
              <li className={location.pathname === "/video" ? "active" : ""}>
                <Link to="/video">Video</Link>
              </li>
              <li className={location.pathname === "/pdf" ? "active" : ""}>
                <Link to="/pdf">Pdf</Link>
              </li>
              <li className={location.pathname === "/document" ? "active" : ""}>
                <Link to="/document">Document</Link>
              </li>
              <li className={location.pathname === "/blog" ? "active" : ""}>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header