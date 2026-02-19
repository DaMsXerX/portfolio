import { useState, useEffect } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Projects", href: "#projects" }, // curiosity gap
    { name: "Connect", href: "#contact" }, // more personal than "Contact"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {/* Logo with Authority Bias */}
      <a
        href="#home"
        className="navbar-logo"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("#home");
        }}
      >
        Anuj Bhalerao
        <span className="navbar-tagline">
          • Full Stack Engineer • Trusted by Startups
        </span>
      </a>

      {/* Desktop Navigation */}
      <ul className="navbar-links">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className={
                activeSection === link.href.substring(1) ? "active magical-link" : "magical-link"
              }
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Call to Action with Scarcity Bias */}
      {/* <a
        href="/resume.pdf"
        className="resume-btn pulse-glow"
        target="_blank"
        rel="noopener noreferrer"
      >
        Work With Me 🚀
      </a> */}

      {/* Mobile Menu Toggle */}
      <div
        className={`mobile-menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul className="mobile-menu-links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className={
                  activeSection === link.href.substring(1) ? "active magical-link" : "magical-link"
                }
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-resume">
          <a
            href="/resume.pdf"
            className="resume-btn pulse-glow"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Work With Me 🚀
          </a>
        </div>
      </div>
    </nav>
  );
}
