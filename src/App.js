import React, { useState, useEffect } from "react";
import "./App.css";

const NavigationMenu = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navigation ${scrolled ? "scrolled" : ""}`}>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <>
      <NavigationMenu />
      <div id="home" className="section home">
        <h1>Welcome to My Website</h1>
        <p>This is an interactive navigation menu</p>
      </div>
      <div id="about" className="section about">
        <h1>About Us</h1>
        <p>This menu changes color or style when scrolled or when hovering over a menu item.
        </p>
      </div>
      <div id="services" className="section services">
        <h1>Our Services</h1>
        <p> This is the Responsive landing page
        </p>
      </div>
      <div id="contact" className="section contact">
        <h1>Contact Us</h1>
        <p>This page displays the contact information</p>
      </div>
    </>
  );
};

export default App;