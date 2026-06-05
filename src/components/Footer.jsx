import { useState, useEffect } from "react";
import "../styles/Footer.css";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Navigation links
  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  // Social media links
  const socialLinks = [
    { 
      icon: "💼", 
      href: "https://linkedin.com/in/anuj-bhalerao", 
      label: "LinkedIn" 
    },
    { 
      icon: "🐙", 
      href: "https://github.com/anuj", 
      label: "GitHub" 
    },
    { 
      icon: "🐦", 
      href: "https://twitter.com/anuj_dev", 
      label: "Twitter" 
    },
    { 
      icon: "📧", 
      href: "mailto:anuj.bhalerao@example.com", 
      label: "Email" 
    }
  ];

  // Quick links
  const quickLinks = [
    { name: "Download Resume", href: "/resume.pdf" },
    { name: "View Projects", href: "#projects" },
    { name: "Get in Touch", href: "#contact" },
    // { name: "My Blog", href: "https://blog.anuj-dev.com" }
  ];

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="footer-logo">Anuj Bhalerao</div>
              <p className="footer-description">
                Passionate Flutter & Full Stack Developer crafting innovative 
                mobile and web solutions. Always excited to take on new challenges 
                and bring creative ideas to life.
              </p>
              <a href="#contact" className="footer-cta">
                <span>Let's Work Together</span>
                <span>→</span>
              </a>
            </div>

            {/* Navigation Links */}
            <div className="footer-section">
              <h4>Navigation</h4>
              <div className="footer-links">
                {navigationLinks.map((link, index) => (
                  <a key={index} href={link.href}>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <div className="footer-links">
                {quickLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-copyright">
              <span>{new Date().getFullYear()} Anuj Bhalerao. All rights reserved.</span>
            </div>
            
            <div className="footer-info">
              <span>
                <div className="status-indicator"></div>
                Available for new projects
              </span>
              <span>Made with ❤️ in India</span>
            </div>

          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </>
  );
}
// more informations soon
