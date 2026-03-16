import { useState } from "react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo">
          Chetana
        </a>
        
        <div className="navbar-right">
          <a href="/resume.pdf" download className="resume-btn" title="Download Resume">
            <FiDownload /> Resume
          </a>
          
          <button 
            className="menu-toggle" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
          <li className="resume-mobile">
            <a href="/resume.pdf" download>
              <FiDownload /> Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
