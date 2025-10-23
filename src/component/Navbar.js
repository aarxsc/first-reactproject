import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">My Portfolio</div>

      <label htmlFor="menu-toggle" className="menu-icon">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </label>

      <nav className="nav-links">
        <a href="#profile">Profile</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
